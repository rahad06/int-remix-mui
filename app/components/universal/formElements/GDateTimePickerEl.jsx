import React from "react";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import {useTranslation} from "react-i18next";
import jMoment from "moment-jalaali";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function GDateTimePickerEl(props) {
    const {t, ready} = useTranslation('common')
    if(!ready) return <></>
    return (
        <div style={{position:'relative'}}>
                    <label className={`date-label`}>{props.label}</label>
            <MobileDateTimePicker
                localeText={{
                    okButtonLabel: t("correct"),
                }}
                label={props.label}
                slotProps={{ textField: { placeholder: props.label } }}
            ></MobileDateTimePicker>
        </div>
    );
}
