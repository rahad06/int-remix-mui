import React from 'react';
import {TableCell, TableRow} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {green, grey} from "@mui/material/colors";
import GCellWCheck from "./GCellWCheck";
import {useTranslation} from "react-i18next";

function GTimeRow(props) {
    const {t, ready} = useTranslation('common')
    if(!ready) return <></>
    return (
        <TableRow className={'time-table-row'}>
            <TableCell>
                {props.noCheck ? null : (
                <Checkbox
                    disabled={props.isDisabled}
                    defaultChecked={props.defaultChecked}
                    sx={{
                        color: props.isDisabled ? grey[800] : green[800],
                        '&.Mui-checked': {
                            color: props.isDisabled ? grey[600] : green[600],
                        }
                    }}
                />
                )}
                {props.title}    
            </TableCell>
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    checked={true}
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                    checked
                />
                <GCellWCheck
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    noCheck={props.isDisabled}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                    checked
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    isThr
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                    isThr
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '08:00' : '13:00'}
                    
                />
                <GCellWCheck
                    noCheck={props.isDisabled}
                    spacing={0}
                    xs1={5}
                    xs2={5}
                    padding={'0 !important'}
                    text={props.title === t("am") ? '12:00' : '17:00'}
                />
        </TableRow>
    );
}

export default GTimeRow;