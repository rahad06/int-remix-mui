import {
    Box,
    Grid,
    Tooltip,
    Badge,
    tooltipClasses,
    styled,
    useTheme, Typography
} from '@mui/material';

import LogoImage from '../../../../public/images/Logo.png'
import {useTranslation} from 'react-i18next'
import {Link} from "@remix-run/react";
import React from "react";
import {PureLightTheme} from "../../../theme/schemes/PureLightTheme.jsx";

const LogoWrapper = styled(Link)(
    ({theme = PureLightTheme}) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const LogoSignWrapper = styled(Box)(
    () => `
        width: 52px;
        height: 52px;
`
);
const TooltipWrapper = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme = PureLightTheme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.colors?.alpha?.trueWhite[100],
        color: theme.palette.getContrastText(theme.colors?.alpha?.trueWhite[100]),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 'bold',
        borderRadius: theme.general.borderRadiusSm,
        boxShadow:
            '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.colors?.alpha?.trueWhite[100]
    }
}));

function LogoSign() {
    const theme = useTheme();
    const {t, ready} = useTranslation()
    return (
        <TooltipWrapper
            title={t("ParminHub_Panel")}
            arrow
        >
            <Grid container alignItems={'center'} spacing={2}>
                <Grid item md={2} xs={2}>
                    <LogoWrapper to="/">
                        <LogoSignWrapper>
                            <img src={LogoImage} alt={'paprikaa web development'}
                            />
                        </LogoSignWrapper>
                    </LogoWrapper>
                </Grid>
                <Grid item md={10} xs={10}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom={false}
                        noWrap
                    >
                        {t("ParminHub_Panel")}
                    </Typography>
                </Grid>
            </Grid>
        </TooltipWrapper>
    );
}

export default LogoSign;
