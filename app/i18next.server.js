import { createCookie } from "@remix-run/cloudflare";
import { RemixI18Next } from "remix-i18next";

import fa from "../public/locales/fa/common.json";

export let localeCookie = createCookie("locale", {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
});

let i18next = new RemixI18Next({
    detection: {
        fallbackLanguage: "fa",
        supportedLanguages: ["fa"],
        cookie: localeCookie,
    },
    i18next: {
        supportedLngs: ["fa"],
        resources: { fa: { translation: fa } },
    },
});
export default i18next;