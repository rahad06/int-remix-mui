import React, {useEffect, useState} from 'react';
import {MobileTimePicker, TimePicker} from "@mui/x-date-pickers";
import {useTranslation} from "react-i18next";

import jMoment from "moment-jalaali";
import dayjs from "dayjs";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
function GTimePickerEl(props) {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    useEffect(() => {
        if(props.value) {
            setValue(props.value)
        }
    }, [props]);
    const {t, ready} = useTranslation('common')
    if(!ready) return <></>
    if(props.isDateTime) {
        return (
            <div style={{position: 'relative'}}>
                <label className={`date-label`}>{props.label}</label>
                <MobileTimePicker
                    localeText={{
                        okButtonLabel: t("correct"),
                    }}
                    slotProps={{textField: {placeholder: props.label}}}
                />
            </div>
        );
    } else {
        return (
            <div style={{position: 'relative'}} >
                <label className={`date-label`}>{props.label}</label>
                    <TimePicker
                        views={props.views ?? ['hours', 'minutes']} format={props.format ?? "hh:mm"}
                        className={'time-picker-box'}
                        localeText={{
                            okButtonLabel: t("correct"),
                        }}
                        slotProps={{textField: {placeholder: props.label}}}
                    />
            </div>
        )
    }
}

export default GTimePickerEl;
