import React from 'react';
import {IconButton, Tooltip, useTheme, TableCell} from "@mui/material";

function GRowBtn(props) {
    const theme = useTheme();

  
    return (
        <TableCell align="center">
        <Tooltip title={props.title} arrow>
            <IconButton
                id={`${props.id}`}
                href={props.href}
                sx={{
                    '&:hover': {
                        background: props.delete ? theme.colors.error : theme.colors.primary.lighter
                    },
                    color: props.delete ? theme.colors.error.dark : theme.palette.primary.main
                }}
                color="inherit"
                size="small"
            >
                {props.children}
            </IconButton>
        </Tooltip>
        </TableCell>
    );
}

export default GRowBtn;
