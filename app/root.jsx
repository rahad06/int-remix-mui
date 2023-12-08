
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';
import { useContext, useEffect, useRef } from 'react';

import {CssBaseline} from '@mui/material';
import { PureLightTheme } from './theme/schemes/PureLightTheme.js';
import { withEmotionCache } from '@emotion/react';
import main from '../app/styles/main.css'
import {themeCreator} from "./theme/base.js";
import ClientStyleContext from "./styles/client.context.jsx";
import ServerStyleContext from "./styles/server.context.jsx";
import {ThemeProvider} from "@mui/material";
export const links = () => {
  return [
    { rel: 'stylesheet', href: main },
  ];
};

const theme = themeCreator('PureLightTheme');

const Document = withEmotionCache(
    ({ children, title }, emotionCache) => {
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

      return (
          <html lang='zh-Hans'>
          <head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
            />
            <Meta />
            <Links />
            {serverStyleData?.map(({ key, ids, css }) => (
                <style
                    key={key}
                    data-emotion={`${key} ${ids.join(' ')}`}
                    dangerouslySetInnerHTML={{ __html: css }}
                />
            ))}
              <title>Paprikaa</title>
          </head>
          <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          </body>
          </html>
      );
    },
);

export default function App() {
  return (
      <Document>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
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

