/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import {RemixBrowser} from "@remix-run/react";
import {startTransition, StrictMode} from "react";
import {hydrateRoot} from "react-dom/client";
import {useCallback, useState} from 'react';

import {CacheProvider} from '@emotion/react';
import ClientStyleContext from '../app/styles/client.context';
import createEmotionCache from '../app/styles/createEmotionCache';


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


startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <ClientCacheProvider>
                <RemixBrowser/>
            </ClientCacheProvider>
        </StrictMode>
    );
});
