

// default
export const enUS = {
    /*
  components: {
    MuiBreadcrumbs: { defaultProps: {
      expandText: 'Show path',
    }},
    MuiTablePagination: { defaultProps: {
      getItemAriaLabel: (type) => {
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`,
    }},
    MuiRating: { defaultProps: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    }},
    MuiAutocomplete: { defaultProps: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    }},
    MuiAlert: { defaultProps: {
      closeText: 'Close',
    }},
    MuiPagination: {  defaultProps: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
    }},
  },
*/
};

export const faIR = {
    datePickerToolbarTitle: 'تاریخ را انتخاب کنید',
    dateTimePickerToolbarTitle: 'تاریخ و ساعت را انتخاب کنید',
    timePickerToolbarTitle: 'ساعت را انتخاب کنید',
    dateRangePickerToolbarTitle: 'محدوده تاریخ را انتخاب کنید',
    components: {
        // MuiBreadcrumbs: {
        //   defaultProps: {
        //     expandText: 'Show path',
        //   },
        // },
        datePickerToolbarTitle: 'تاریخ را انتخاب کنید',
        dateTimePickerToolbarTitle: 'تاریخ و ساعت را انتخاب کنید',
        timePickerToolbarTitle: 'ساعت را انتخاب کنید',
        dateRangePickerToolbarTitle: 'محدوده تاریخ را انتخاب کنید',
        MuiBreadcrumbs: {
            defaultProps: {
                expandText: 'نمایش مسیر',
            },
        },
        MuiDateTimePicker:{
            defaultProps: {
                timeTableLabel: 'انتخاب تاریخ',
                dateTableLabel: 'انتخاب ساعت',
                datePickerToolbarTitle: 'تاریخ را انتخاب کنید',
                timePickerToolbarTitle: 'ساعت را انتخاب کنید',
                dateRangePickerToolbarTitle: 'محدوده تاریخ را انتخاب کنید',
                okLabel:"تأیید",
                cancelLabel:"لغو",
                clearLabel:"پاک کردن",
            },
        },
        MuiDateTimePickerToolbar: {
            defaultProps: {
                toolbarTitle: 'تاریخ را انتخاب کنید'
},
        },
        MuiTablePagination: {
            defaultProps: {
                getItemAriaLabel: (type) => {
                    if (type === 'first') {
                        return 'رفتن به اولین صفحه';
                    }
                    if (type === 'last') {
                        return 'رفتن به آخرین صفحه';
                    }
                    if (type === 'next') {
                        return 'رفتن به صفحه‌ی بعدی';
                    }
                    // if (type === 'previous') {
                    return 'رفتن به صفحه‌ی قبلی';
                },
                labelRowsPerPage: 'شمار:',
                labelDisplayedRows: ({ from, to, count }) =>
                    ` ردیف 
                    ${from}
                    تا
                    ${to}
                    از
                    ${count !== -1 ? count : `بیشتر از ${to}`}
                   ردیف
                    `,
            },
        },
        MuiRating: {
            defaultProps: {
                getLabelText: (value) => `${value} ستاره`,
                emptyLabelText: 'خالی',
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                clearText: 'پاک‌کردن',
                closeText: 'بستن',
                loadingText: 'در حال بارگذاری…',
                noOptionsText: 'بی‌نتیجه',
                openText: 'بازکردن',
            },
        },
        MuiAlert: {
            defaultProps: {
                closeText: 'بستن',
            },
        },
        MuiPagination: {
            defaultProps: {
                'aria-label': 'ناوبری صفحه',
                getItemAriaLabel: (type, page, selected) => {
                    if(!type) return
                    if (type === 'page') {
                        return `${selected ? '' : 'رفتن به '}صفحهٔ ${page}`;
                    }
                    if (type === 'first') {
                        return 'رفتن به اولین صفحه';
                    }
                    if (type === 'last') {
                        return 'رفتن به آخرین صفحه';
                    }
                    if (type === 'next') {
                        return 'رفتن به صفحه‌ی بعدی';
                    }
                    // if (type === 'previous') {
                    return 'رفتن به صفحه‌ی قبلی';
                },
            },
        },
       
    },
};
