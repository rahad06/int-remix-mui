import React from 'react';
import {Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useTranslation} from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import GDatePickerEl from "./GDatePickerEl";
import GTimePickerEl from "./GTimePickerEl";
import {checkFa, toEngNumber} from "../../../functions";
import GCardUploader from "./GCardUploader";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function GFormFieldWShow(props) {
    const {t, ready} = useTranslation('common')
    if (!ready) return <></>
    return (
        <Grid item lg={props.lg ?? 4} md={props.md ?? 6} xs={12} className={props.gridClass ?? ""}>
            {((props.isShow || props.isEdit) && props.notEditable) || props.isShow ? (
                <>
                    <Typography
                        variant="body2"
                        fontWeight="light"
                        color="text.primary"
                        gutterBottom
                        noWrap
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight="normal"
                        color="text.primary"
                        gutterBottom
                        noWrap
                    >
                        {props.value}
                    </Typography>
                </>
            ) : (
                <>
                    {props.isDate ? !props.isDateTime ? (
                            <GDatePickerEl
                                label={props.label}
                                value={props.value}
                            />
                        ) : (
                            <GTimePickerEl
                                label={props.label}
                                value={props.value}
                            />
                        ) :
                        props.isSelect ? (
                            <TextField
                                select
                                label={props.label}
                                value={props.value}
                                onChange={props.handleSelect}
                                // helperText="Please select your currency"
                            >
                                {props.options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        ) : props.cardUploader ? (
                                <GCardUploader/>
                            ) :
                            (
                                <>
                                    <TextField
                                        className={props.className ?? ""}
                                        sx={{width: '100%', textAlign: 'right'}}
                                        required={props.required}
                                        label={props.label}
                                        value={props.value}
                                        onChange={e => props.setValue(toEngNumber(e.target.value))}
                                    />
                                    {props.hasCounters ? (
                                        <>
                                        <ArrowDropUpIcon 
                                        onClick={() => props.topClick()}
                                        />
                                            <ArrowDropDownIcon
                                                onClick={() => props.bottomClick()}
                                            />
                                        </>
                                    ) : null}
                                </>
                            )}
                </>
            )}
        </Grid>
    );
}

export default GFormFieldWShow;
