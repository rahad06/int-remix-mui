import React from 'react';
import {Typography} from "@mui/material";
import GTextArea from "./GTextArea";

function GAreaWLabel(props) {
    return (
        <>
        <Typography
            variant="body2"
            fontWeight="normal"
            color="text.primary"
            gutterBottom
            noWrap
        >
            {props.text}
        </Typography>
    <GTextArea
        defaultValue={props.value}
    ></GTextArea>
        </>
);
}

export default GAreaWLabel;
