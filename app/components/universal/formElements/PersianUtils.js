
import jalaliUtils from "@date-io/jalaali";

class PersianUtils extends jalaliUtils {
    getMonthText(date) {
        return this.months[this.getMonth(date)];
    }
}

const persianMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
];

PersianUtils.prototype.months = persianMonths;