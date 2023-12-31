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
    serverDependenciesToBundle: [
        "@mui/material",
        "@mui/material/locale",
        "@mui/material/styles",
        "@mui/material/Box",
        "@mui/material/utils",
        "@mui/base/ClassNameGenerator",
        "@mui/base/composeClasses",
        "@mui/base/unstable_useModal",
        "@mui/base/Popper",
        "@mui/base/FocusTrap",
        "@mui/base/Portal",
        "@mui/utils/generateUtilityClasses",
        "@mui/system",
        "@mui/x-date-pickers",
        "@mui/x-date-pickers/locale",
        "@mui/x-date-pickers/locales",
        "@mui/x-date-pickers/AdapterDayjs",
        "@mui/icons-material",
        "@mui/icons-material/Newspaper",
        "@mui/icons-material/Badge",
        "@mui/icons-material/Contacts",
        "@mui/icons-material/Assignment",
        "@mui/icons-material/SupervisorAccount",
        "@mui/icons-material/RecentActors",
        "@mui/icons-material/PersonAddAlt1",
        "material-ui-persian-date-picker-utils",
        "@mui/styled-engine",
        "@babel/runtime/helpers/interopRequireDefault",
        // "react/jsx-runtime",
        "moment-jalaali",
        "jalaali-js",
        "moment",
        "dayjs",
        "dayjs/plugin/objectSupport",
        "dayjs/plugin/duration",
        "dayjs/plugin/weekOfYear",
        "dayjs/plugin/customParseFormat",
        "dayjs/plugin/localizedFormat",
        "dayjs/plugin/isBetween",
        "moment/locale/fa",
        '@emotion/react',
        "jodit-react",
        "remix-i18next",
        "react-i18next",
        "react-i18next/I18nextProvider",
        "i18next",
        "i18next-browser-languagedetector"
    ],
    // appDirectory: "app",
    // assetsBuildDirectory: "public/build",
    // publicPath: "/build/",
    // serverBuildPath: "build/index.js",
};
