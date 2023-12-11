import React, {useEffect, useState} from 'react';
import {Grid, TableCell} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {green, grey} from "@mui/material/colors";

function GHeaderCellWCheck(props) {
    const [yes, setYes] = useState(false)
    useEffect(() => {
        if(typeof props.checked !== "undefined") {
            setYes(props.checked)
        }
    }, [props.checked]);
    return (
        <TableCell colSpan={2}>
            <Grid container xs={12} alignItems={'center'} justifyContent={'center'}>
            {props.noCheck ? null : (
                <Grid item xs={3.8}>
            <Checkbox
                checked={yes}
                onChange={e => setYes(e.target.checked)}
                sx={{
                    color: props.disabled ? grey[800] : green[800],
                    '&.Mui-checked': {
                        color: props.disabled ? grey[600] : green[600],
                    }
                }}
                disabled={props.disabled}
            />
                </Grid>
            )}
                <Grid item xs={8.2}>
                {props.name}
                </Grid>
            </Grid>
            </TableCell>
    );
}

export default GHeaderCellWCheck;
