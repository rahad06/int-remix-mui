import React from 'react';
import {TableCell, Typography, Box} from "@mui/material";

function GEditableCheckCell(props) {
    return (
        <TableCell colSpan={props.colSpan ?? 1} rowSpan={props.rowSpan ?? 1}
                   className={props.className ?? ""}
        >
                    <Box component={'span'} variant={'span'} sx={{cursor:'pointer'}} className={props.boxClass ?? ""}>
                        {props.children}
                    </Box>
        </TableCell>
    )
}

export default GEditableCheckCell;
