/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */
import React from 'react'
import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode} from "react";
import {hydrateRoot} from "react-dom/client";
import {useCallback, useState} from 'react';
import {CacheProvider} from '@emotion/react';
import ClientStyleContext from '../app/styles/client.context';
import createEmotionCache from '../app/styles/createEmotionCache';
import i18next, {createInstance} from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {I18nextProvider, initReactI18next} from "react-i18next";
import {getInitialNamespaces} from "remix-i18next";
import i18n from "./i18n.jsx";
import fa from '../public/locales/fa/common.json'
import {measure} from "./components/universal/utils/measure.js";

measure("entry.client#hydrate", async () => {
    let instance = createInstance().use(initReactI18next).use(LanguageDetector);
    await instance.init({
        supportedLngs: ["fa"],
        fallbackLng: "fa",
        react: {useSuspense: false},
        ns: getInitialNamespaces(),
        detection: {order: ["htmlTag"], caches: []},
        resources: {fa: {translation: fa}},
        interpolation: {escapeValue: false},
    });

    return hydrate(instance);
}).then(r => r)

function ClientCacheProvider({children}) {
    const [cache, setCache] = useState(createEmotionCache());

    const reset = useCallback(() => {
        setCache(createEmotionCache());
    }, []);

    return (
        <ClientStyleContext.Provider value={{reset}}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    );
}

async function hydrate(instance) {
    // if (!i18next.isInitialized)
    //     await i18next
    //         .use(initReactI18next)
    //         .use(LanguageDetector)
    //         .use(Backend)
    //         .init({
    //             ...i18n,
    //             ns: getInitialNamespaces(),
    //             backend: {
    //                 loadPath: "/locales/{{lng}}/{{ns}}.json",
    //             },
    //             detection: {
    //                 order: ["htmlTag"],
    //                 caches: [],
    //             },
    //         })
    //         .then(() => {
    startTransition(() => {
        hydrateRoot(
            document,
            <I18nextProvider i18n={instance}>
                <StrictMode>
                    <ClientCacheProvider>
                        <RemixBrowser/>
                    </ClientCacheProvider>
                </StrictMode>
            </I18nextProvider>
        );
    });
    //     }
    // )
}

if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    window.setTimeout(hydrate, 1);
}