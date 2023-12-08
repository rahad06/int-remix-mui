/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import {PassThrough} from "node:stream";
import {createReadableStreamFromReadable} from "@remix-run/node";
import {RemixServer} from "@remix-run/react";
import isbot from "isbot";
import {renderToPipeableStream} from "react-dom/server";
import {CacheProvider} from '@emotion/react';
import ServerStyleContext from '../app/styles/server.context';
import createEmotionCache from '../app/styles/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';
import {renderToString} from 'react-dom/server';
import {createInstance} from "i18next";
import Backend from "i18next-fs-backend";
import {resolve} from "node:path";
import {I18nextProvider, initReactI18next} from "react-i18next";
import i18next from "./i18next.server"; // The backend file we created
import i18n from "./i18n"; // The configuration file we created
const ABORT_DELAY = 5_000;

export default async function handleRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
) {
    const cache = createEmotionCache();
    const {extractCriticalToChunks} = createEmotionServer(cache);

    const html = renderToString(
        <ServerStyleContext.Provider value={null}>
            <CacheProvider value={cache}>
                <RemixServer
                    context={remixContext}
                    url={request.url}
                />
            </CacheProvider>
        </ServerStyleContext.Provider>,
    );

    const chunks = extractCriticalToChunks(html);

    const markup = renderToString(
        <ServerStyleContext.Provider value={chunks.styles}>
            <CacheProvider value={cache}>
                <RemixServer
                    context={remixContext}
                    url={request.url}
                />
            </CacheProvider>
        </ServerStyleContext.Provider>,
    );
    let instance = createInstance();

    // We can detect the specific locale from each request
    let lng = await i18next.getLocale(request);
    // The namespaces the routes about to render wants to use
    let ns = i18next.getRouteNamespaces(remixContext);
    let callbackName = isbot(request.headers.get("user-agent"))
        ? "onAllReady"
        : "onShellReady";
    await instance
        .use(initReactI18next)
        .use(Backend)
        .init({
            ...i18n,
            lng,
            ns,
            backend: {
                loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
            },
        });
    return new Promise((resolve, reject) => {
        let didError = false;

        let {pipe, abort} = renderToPipeableStream(
            <I18nextProvider i18n={instance}>
                <RemixServer context={remixContext} url={request.url}/>
            </I18nextProvider>,
            {
                [callbackName]: () => {
                    let body = new PassThrough();
                    const stream = createReadableStreamFromReadable(body);
                    responseHeaders.set("Content-Type", "text/html");

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: didError ? 500 : responseStatusCode,
                        })
                    );

                    pipe(body);
                },
                onShellError(error) {
                    reject(error);
                },
                onError(error) {
                    didError = true;

                    console.error(error);
                },
            }
        );

        setTimeout(abort, ABORT_DELAY);
    })
}

function handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
) {
    return new Promise((resolve, reject) => {
        let shellRendered = false;
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={ABORT_DELAY}
            />,
            {
                onAllReady() {
                    shellRendered = true;
                    const body = new PassThrough();
                    const stream = createReadableStreamFromReadable(body);

                    responseHeaders.set("Content-Type", "text/html");

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        })
                    );

                    pipe(body);
                },
                onShellError(error) {
                    reject(error);
                },
                onError(error) {
                    responseStatusCode = 500;
                    // Log streaming rendering errors from inside the shell.  Don't log
                    // errors encountered during initial shell rendering since they'll
                    // reject and get logged in handleDocumentRequest.
                    if (shellRendered) {
                        console.error(error);
                    }
                },
            }
        );

        setTimeout(abort, ABORT_DELAY);
    });
}

function handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
) {
    return new Promise((resolve, reject) => {
        let shellRendered = false;
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={ABORT_DELAY}
            />,
            {
                onShellReady() {
                    shellRendered = true;
                    const body = new PassThrough();
                    const stream = createReadableStreamFromReadable(body);

                    responseHeaders.set("Content-Type", "text/html");

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        })
                    );

                    pipe(body);
                },
                onShellError(error) {
                    reject(error);
                },
                onError(error) {
                    responseStatusCode = 500;
                    // Log streaming rendering errors from inside the shell.  Don't log
                    // errors encountered during initial shell rendering since they'll
                    // reject and get logged in handleDocumentRequest.
                    if (shellRendered) {
                        console.error(error);
                    }
                },
            }
        );

        setTimeout(abort, ABORT_DELAY);
    });
}
