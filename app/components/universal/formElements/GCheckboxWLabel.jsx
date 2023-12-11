import React from 'react';
import {FormControlLabel} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {green, grey} from "@mui/material/colors";

function GCheckboxWLabel(props) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={props.checked}
                    sx={{
                        color: props.isShow ? grey[800] : green[800],
                        '&.Mui-checked': {
                            color: props.isShow ? grey[600] : green[600],
                        }
                    }}
                />
            }
            disabled={props.disabled}
            className={'checkbox-label'}
            onChange={e => props.onChange(e.target.checked, props.m.id)}
            label={props.m ? props.m.label : props.name}
        />
    );
}

export default GCheckboxWLabel;