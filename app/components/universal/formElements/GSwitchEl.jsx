import React from 'react';
import Switch from '@mui/material/Switch';
import {FormGroup, FormControlLabel} from '@mui/material'
function GSwitchEl(props) {
    return (
        <FormGroup
            className={'switch-el'}
        >
            <FormControlLabel 
                sx={{fontSize:'16px'}}
               
                control={<Switch />} label={props.label} />
        </FormGroup>
    );
}

export default GSwitchEl;   