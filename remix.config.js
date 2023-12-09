
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  optimize: {
    bundle: {
      external: {
        include: ['fonts/shabnam/Shabnam-FD-WOL.woff2'],
      },
    }
  },
  serverDependenciesToBundle: ["jodit-react", "remix-i18next", "react-i18next", "i18next",
      "i18next-browser-languagedetector"
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
