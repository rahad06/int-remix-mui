import React from 'react';
import {Typography} from "@mui/material";

function GInputSub(props) {
    return (
        <Typography variant="h5" sx={{py: 1, marginBottom: '18px'}} fontWeight="normal"
        >
            {props.text}
        </Typography>
    );
}

export default GInputSub;
