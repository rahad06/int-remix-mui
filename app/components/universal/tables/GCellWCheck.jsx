import React, {useEffect, useState} from 'react';
import {Grid, TableCell, Typography, useTheme} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {green, grey} from "@mui/material/colors";
import GMainCell from "./GMainCell";

function GCellWCheck(props) {
    const theme = useTheme()
    const [yes, setYes] = useState(false)
    useEffect(() => {
        if(props.isThr) {
            if(props.text === '08:00' || props.text === '12:00') {
                setYes(true)
            } else {
                setYes(false)
            }
        }
        if(typeof props.checked !== "undefined") {
            setYes(props.checked)
        }
    }, [props.checked]);

    if(props.noCheck) {
        return (
            <GMainCell
                text={props.text}
            ></GMainCell>
        )
    }
    return (
        <TableCell colSpan={props.colSpan ?? 1} sx={{padding: props.padding ?? '16px 6px'}}>
            <Grid container alignItems={'center'} justifyContent={'center'} spacing={props.spacing ?? 0}
                  sx={{maxWidth: props.noCheck ? '100%' : '100%'}}>
                    <Grid item xs={props.xs1 ?? 1}>
                        {props.noCheck ? null : (
                            <Checkbox
                            checked={yes}
                            onChange={e => setYes(e.target.checked)}
                            sx={{
                                padding:0,
                                color: props.disabled ? grey[800] : green[800],
                                '&.Mui-checked': {
                                    color: props.disabled ? grey[600] : green[600],
                                }
                            }}
                            disabled={props.disabled}
                        />
                        )}

                    </Grid>
                <Grid item xs={props.xs2 ?? 11}>
                    {props.text}
                </Grid>
            </Grid>
        </TableCell>
    );
}

export default GCellWCheck;
