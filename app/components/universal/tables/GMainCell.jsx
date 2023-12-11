import React from 'react';
import {TableCell, Typography, Box, Button} from "@mui/material";

function GMainCell(props) {
    return (
        <TableCell colSpan={props.colSpan ?? 1} rowSpan={props.rowSpan ?? 1}
        className={props.className ?? ""}
        >
            <Typography
                variant="body1"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
                noWrap
                sx={{display:props.hasBtn ? 'grid' : 'flex', gridTemplateColumns:'2.2fr 1fr 2fr', alignItems:props.hasBtn ? "center !important":'center', gap: props.gap ?? 0, justifyContent:props.className === 'table-cell-right' ? 'flex-start' : 'center', flexDirection: props.mainIcon ? 'row' : 'column', textAlign: props.align ?? 'center'}}
            >
                {props.hasIcon ? (
                <Box component={'span'} variant={'span'} sx={{cursor:'pointer'}}>
                    {props.children}
                </Box>
                ) : null}
                <Box component={'span'} variant={'span'} sx={{display:'flex', alignItems:'center', flexDirection: props.second ? 'column' : 'row'}}>
                    <Box component={'span'} variant={'span'}>
                    {props.text}
                    </Box>
                    {props.extra ? (
                        <>
                            <br/>
                        <Box component={'span'} variant={'span'} sx={{paddingTop:'8px'}}>
                        {props.second}
                        </Box>
                        </>
                    ) : null}
                    
                </Box>
                {props.mainIcon ? (
                    <Box component={'span'} variant={'span'}>
                    {props.children}
                    </Box>
                ) : null}
                {props.hasBtn ? (<>
                <Box component={'div'} variant={'div'} sx={{justifySelf:'flex-end'}}>
                    <Button
                        href={props.href}
                        sx={{ margin: 1 }}
                        variant="contained"
                        color="primary"
                    >
                        {props.btnText}
                    </Button>
                </Box>
                </>) : null}
            </Typography>
        </TableCell>
    );
}

export default GMainCell;
