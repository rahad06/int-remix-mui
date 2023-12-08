import React, {useState} from 'react';
import {ThemeProvider} from '@mui/material';
import {themeCreator} from './base';

export const ThemeContext = React.createContext();

const ThemeProviderWrapper = function (props) {
    // const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
    // const [themeName, _setThemeName] = useState(curThemeName);
    const theme = themeCreator('PureLightTheme');
    // const setThemeName = (themeName) => {
    //   localStorage.setItem('appTheme', themeName);
    //   _setThemeName(themeName);
    // };

    return (
        <ThemeContext.Provider value={'Tokyo'}>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProviderWrapper;
