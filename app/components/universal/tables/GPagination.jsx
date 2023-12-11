import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import CustomPagination from './CustomPagination'
import Box from "@mui/material/Box";
import GButton from "../buttons/GButton";
import {useTranslation} from "react-i18next";

function GPagination(props) {
    const {t, ready, i18n} = useTranslation('common')

    if (!ready) return <></>
    return (
        <Box component={'div'} className={` ${props.hasAdd ? "pagination-wrapper" : ""}`}>
            <Box component={'div'} className={'add-in-table'}>
                {props.hasAdd ? (
                    <GButton
                        id={props.addId ?? "tableAddBtn"}
                        btnText={t("add")}
                        btnFn={props.btnFn}
                    />
                ) : null}

            </Box>
            <TablePagination
                className={'g-table-pag'}
                component={'div'}
                count={props.count}
                onPageChange={props.onPageChange}
                onRowsPerPageChange={props.onRowsPerPageChange}
                page={props.page}
                rowsPerPage={props.rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 30]}
                ActionsComponent={CustomPagination}
            />
        </Box>
    );
}

export default GPagination;
