import * as React from 'react';
import { styled } from '@mui/material/styles';
import EventIcon from '@mui/icons-material/Event';
import { DatePicker } from '@mui/x-date-pickers';
import jMoment from 'moment-jalaali';

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

const DatePickerIcon = styled(EventIcon)({
    cursor: 'pointer',
});

const DatePickerContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    '& .MuiFormControl-root': {
        alignItems:'center'
    },
});

const StyledDatePicker = styled(DatePicker)({

    '& .MuiInputBase-input': {
       display:'none',
        '&:placeholder': {
            color: '#fff'
        }
    },
    '& fieldset': {
        border: '0 !important',
        background: 'transparent',
    },
    // '& button': {
    //     marginRight:'0 !important',
    //     // marginLeft:'12px'
    // },
    // '& .Mui-focused': {
    //     '& button': {
    //         marginRight:'0 !important',
    //         marginLeft:'12px'
    //     }
    // },
});

export default function GTableDatePicker() {
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const openDatePicker = () => {
        if (pickerRef.current) {
            pickerRef.current.openPicker();
        }
    };

    const pickerRef = React.useRef();

    return (
        <DatePickerContainer>
            <StyledDatePicker
                ref={pickerRef}
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={() => <input style={{ border: 'none', background: 'transparent' }} />}
            />
            <span>1403/02/12</span>
        </DatePickerContainer>
    );
}
