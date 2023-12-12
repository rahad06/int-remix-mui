import React from 'react';
import {Box, IconButton, Tooltip} from "@mui/material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import useSidebarStore from "../../../stores/useSidebarStore";

function MobileMenuIcon(props) {

    const { sidebarToggle, toggleSidebar } = useSidebarStore();

    return (
        <Box
            component="span"
            sx={{
                ml: 2,
                display: {lg: 'none', xs: 'inline-block'}
                
            }}
            className={'mobile-burger'}
        >
            <Tooltip arrow title="Toggle Menu">
                <IconButton color="primary" onClick={toggleSidebar}>
                    {!sidebarToggle ? (
                        <MenuTwoToneIcon fontSize="small"/>
                    ) : (
                        <CloseTwoToneIcon fontSize="small"/>
                    )}
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export default MobileMenuIcon;
