import React from 'react';
import {Button} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

function GButton(props) {
    return (
        <Button
            id={props.id ?? `gBtn-${props.btnText}`}
            sx={{mt: {xs: 2, md: 0}}}
            variant="contained"
            onClick={(e) => props.btnFn(e)}
            startIcon={<AddTwoToneIcon fontSize="small"/>}
        >
            {" "}{props.btnText}
        </Button>
    );
}

export default GButton;