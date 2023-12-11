import React from 'react';
import {Typography} from "@mui/material";

function GFormLabel(props) {
    return (

        <Typography
            variant="body2"
            fontWeight="normal"
            color="text.primary"
            gutterBottom
            noWrap
        >
            {props.text}
        </Typography>
    );
}

export default GFormLabel;