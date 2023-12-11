import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import {faIR} from "../../locales/locale";

export default function Locales(props) {
    const locale = faIR;

    const theme = useTheme();

    const themeWithLocale = React.useMemo(
        () => createTheme(theme, { ...locale }), 
        [locale, theme],
    );

    return (
            <ThemeProvider theme={themeWithLocale}>
                {props.children}
            </ThemeProvider>
    );
}