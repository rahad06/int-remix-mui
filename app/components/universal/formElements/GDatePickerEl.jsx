import React, { useState } from "react";
import {DatePicker} from "@mui/x-date-pickers";
import jMoment from "moment-jalaali";
import dayjs from 'dayjs';

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });


export default function GDatePickerEl(props) {
    const [selectedDateTime, setSelectedDateTime] = useState(dayjs('2022-04-17'));

    const handleDateTimeChange = (dateTime) => {
        setSelectedDateTime(dateTime);
    };
    return (
        <div>
            <DatePicker label={props.label}
                        slotProps={{ textField: { placeholder: props.label } }}
                        value={selectedDateTime}
                        onChange={handleDateTimeChange}
                        className='only-date-picker'/>
        </div>
    );
}
