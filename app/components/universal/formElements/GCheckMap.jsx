import React from 'react';
import {FormControlLabel, FormGroup, Grid} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {green, grey} from "@mui/material/colors";

function GCheckMap(props) {
    return (
        <FormGroup className={'real-form-label'}>
            <Grid container spacing={2}>
                {props.fields?.map(m => (
                    <Grid item xs={12} md={6} lg={4}>
                        <FormControlLabel
                            key={m.id}
                            className={'check-label'}

                            control={
                                <Checkbox
                                    disabled={props.isShow}
                                    checked={m.checked}
                                    onChange={e => {
                                        props.setForm(e.target.checked)
                                        props.setRes(e.target.checked, m.id)
                                    }}
                                    sx={{
                                        color: props.isShow ? grey[800] : green[800],
                                        '&.Mui-checked': {
                                            color: props.isShow ? grey[600] : green[600],
                                        }
                                    }}
                                />
                            }
                            label={m.name}
                        />
                    </Grid>
                ))}
            </Grid>
        </FormGroup>
    );
}

export default GCheckMap;