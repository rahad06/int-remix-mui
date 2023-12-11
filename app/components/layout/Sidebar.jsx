
import {
    Box,
    Drawer,
    alpha,
    styled,
    Divider,
    useTheme,
    Button,
    lighten,
    darken
} from '@mui/material';

import SidebarMenu from "./SidebarMenu";
import Logo from "../singleComponents/LogoSign/LogoSign.jsx";
import useSidebarStore from "../../stores/useSidebarStore";


const SidebarWrapper = styled(Box)(
    ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
    const { sidebarToggle, toggleSidebar } = useSidebarStore();
    const closeSidebar = () => toggleSidebar();
    const theme = useTheme();

    return (
        <>
            <SidebarWrapper
                className={'sidebar-wrapper-c prime-bg'}
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'inline-block'
                    },
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    background:
                        theme.palette.mode === 'light'
                            ? alpha(lighten(theme.header.background, 0.1), 0.5)
                            : darken(theme.colors.alpha.black[100], 0.5),
                    boxShadow:
                        theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
                }}
            >
                {/*<Scrollbar>*/}
                    <Box 
                         className={'logo-wrapper'}
                    >
                        <Box
                            mx={2}
                            sx={{
                                width: 52
                            }}
                            className={'logo-box-inner'}
                        >
                            <Logo />
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            mt: 0,
                            mx: theme.spacing(2),
                            background: theme.colors.alpha.trueWhite[10]
                        }}
                    />
                    <SidebarMenu />
                {/*</Scrollbar>*/}
            </SidebarWrapper>
            <Drawer
                className={'mobile-drawer prime-bg'}
                sx={{
                    boxShadow: `${theme.sidebar.boxShadow}`
                }}
                anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                open={sidebarToggle}
                onClose={closeSidebar}
                variant="temporary"
                elevation={9}
            >
                <SidebarWrapper
                    sx={{
                        background:
                            theme.palette.mode === 'dark'
                                ? theme.colors.alpha.white[100]
                                : darken(theme.colors.alpha.black[100], 0.5)
                    }}
                >
                        <Box mt={3}>
                            <Box
                                mx={2}
                                sx={{
                                    width: 52
                                }}
                            >
                                <Logo />
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                mt: theme.spacing(3),
                                mx: theme.spacing(2),
                                background: theme.colors.alpha.trueWhite[10]
                            }}
                        />
                    
                        <SidebarMenu />
                </SidebarWrapper>
            </Drawer>
        </>
    );
}

export default Sidebar;
