import React from "react";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import {faIR} from "../../locales/locale.jsx";
import { useState, useEffect } from 'react';

export default function Locales(props) {
    const locale = faIR;
    const theme = useTheme();
    const [themeWithLocale, setThemeWithLocale] = useState(() => createTheme(theme, { ...locale }));

    useEffect(() => {
        setThemeWithLocale(createTheme(theme, { ...locale }));
    }, [locale, theme]);

    return (
        <ThemeProvider theme={themeWithLocale}>
            {props.children}
        </ThemeProvider>
    );
}
