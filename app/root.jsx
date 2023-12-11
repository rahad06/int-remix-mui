import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError, useLoaderData,
} from '@remix-run/react';
import {useContext, useEffect, useRef} from 'react';
import {CssBaseline} from '@mui/material';
import {PureLightTheme} from './theme/schemes/PureLightTheme.js';
import {withEmotionCache} from '@emotion/react';
import main from '../app/styles/main.css'
import {themeCreator} from "./theme/base.js";
import ClientStyleContext from "./styles/client.context.jsx";
import ServerStyleContext from "./styles/server.context.jsx";
import {ThemeProvider} from "@mui/material";
import {useChangeLanguage} from "remix-i18next";
import {useTranslation} from "react-i18next";
import {json} from "@remix-run/node";
import remixI18n from './i18next.server'
import {I18nextProvider, initReactI18next} from "react-i18next";

// import './i18n';
import i18next from "i18next";
import Layout from "./Layout.jsx";

export const links = () => {
    return [
        {rel: 'stylesheet', href: main},
    ];
};

export const loader = async ({request}) => {
    const locale = await remixI18n.getLocale(request)
    const t = await remixI18n.getFixedT(request, 'common')
    const title = t('headTitle')
    return json({locale, title})
}

export let handle = {
    // In the handle export, we can add an i18n key with namespaces our route
    // will need to load. This key can be a single string or an array of strings.
    // TIP: In most cases, you should set this to your defaultNS from your i18n config
    // or if you did not set one, set it to the i18next default namespace "translation"
    i18n: "common",
};
const theme = themeCreator('PureLightTheme');

const Document = withEmotionCache(
    ({children, title}, emotionCache) => {
        const serverStyleData = useContext(ServerStyleContext);
        const clientStyleData = useContext(ClientStyleContext);
        const reinjectStylesRef = useRef(true);

        useEffect(() => {
            if (!reinjectStylesRef.current) {
                return;
            }
            emotionCache.sheet.container = document.head;

            const tags = emotionCache.sheet.tags;
            emotionCache.sheet.flush();
            tags.forEach((tag) => {
                (emotionCache.sheet)._insertTag(tag);
            });

            clientStyleData.reset();
            reinjectStylesRef.current = false;
        }, [clientStyleData, emotionCache.sheet]);
        const {t, i18n, ready} = useTranslation('common')
        const {locale} = useLoaderData()

        // This hook will change the i18n instance language to the current locale
        // detected by the loader, this way, when we do something to change the
        // language, this locale will change and i18next will load the correct
        // translation files
        useChangeLanguage(locale)
        if (!ready) return <></>
        return (
            <html lang={i18n.resolvedLanguage} dir={i18n.dir()}>
            <head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
                />
                <Meta/>
                <Links/>
                {serverStyleData?.map(({key, ids, css}) => (
                    <style
                        key={key}
                        data-emotion={`${key} ${ids.join(' ')}`}
                        dangerouslySetInnerHTML={{__html: css}}
                    />
                ))}
                <title>Paprikaa</title>
            </head>
            <body>
            {children}
            <ScrollRestoration/>
            <Scripts/>
            {process.env.NODE_ENV === "development" && <LiveReload/>}
            </body>
            </html>
        );
    },
);

export default function App() {
    return (
        <Document>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Layout>
                    <Outlet/>
                </Layout>
            </ThemeProvider>
        </Document>
    );
}

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

