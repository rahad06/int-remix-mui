import React from 'react';
import {Button, ListItem} from "@mui/material";
import {NavLink} from "@remix-run/react";

function NavListItem(props) {
    const l = props.l
    return (
        <ListItem component="div">
            <Button
                disableRipple
                component={NavLink}
                onClick={props.closeSidebar}
                to={l.url}
                startIcon={l.icon}
                className={props.className ?? ""}
            >
                {l.name}
            </Button>
        </ListItem>
    );
}

export default NavListItem;