import React from 'react'
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Sidebar from "./components/layout/Sidebar";
import {alpha, lighten} from "@mui/material";
import Locales from "./components/hooks/Locales";
import dayjs from 'dayjs'
import {LocalizationProvider} from "@mui/x-date-pickers";
import {faIR} from '@mui/x-date-pickers/locales';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import jalaliday from 'jalaliday'
import 'moment/locale/fa';
import PersianUtils from 'material-ui-persian-date-picker-utils';

const faLocale = faIR.components.MuiLocalizationProvider.defaultProps.localeText;
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(objectSupport);
dayjs.extend(jalaliday)
// dayjs.calendar('jalali') // Jalali Calendar

export default function Layout({children}) {

    const theme = useTheme();
    if(!theme) return <></>
    return (
        <Locales>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa"
                                  localeText={faLocale} utils={PersianUtils}
                // dateLibInstance={new PersianUtils()}
            >
                <Box
                    className={'global-box'}
                    sx={{
                        flex: 1,
                        height: '100%',

                        '.MuiPageTitle-wrapper': {
                            background:
                                theme.palette.mode === 'light'
                                    ? theme.colors?.alpha?.black[5]
                                    : theme.colors?.alpha?.white[50],
                            marginBottom: `${theme.spacing(4)}`,
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 1px 0 ${alpha(
                                        lighten(theme.colors?.primary?.main, 0.7),
                                        0.15
                                    )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                                    : `0px 2px 4px -3px ${alpha(
                                        theme.colors?.alpha?.black[100],
                                        0.1
                                    )}, 0px 5px 12px -4px ${alpha(
                                        theme.colors?.alpha?.white[100],
                                        0.05
                                    )}`
                        }
                    }}
                >
                    <Sidebar/>
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 5,
                            display: 'block',
                            flex: 1,
                            pt: `${theme.header?.height}`,
                            [theme.breakpoints.up('lg')]: {
                                mr: `${theme.sidebar?.width}`
                            }
                        }}
                    >
                        <Box display="block">
                            {children}
                        </Box>
                    </Box>
                </Box>
            </LocalizationProvider>
        </Locales>
    );
}
