import React from 'react';
import {Typography} from "@mui/material";

function GCardSub(props) {
    return (
        <Typography variant="caption" fontWeight="bold">
            {props.text}
        </Typography>
    );
}

export default GCardSub;
