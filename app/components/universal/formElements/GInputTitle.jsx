import React from 'react';
import {Typography} from "@mui/material";

function GInputTitle(props) {
    return (
        <Typography variant="h5"
        sx={{marginBottom: '4px'}}
        >{props.text}</Typography>
    );
}

export default GInputTitle;