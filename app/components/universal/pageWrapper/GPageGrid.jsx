import React, {useRef, useState} from 'react';
import {CardHeader, Divider, Grid, Card, Popover, Button, List, ListItem, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from "@mui/material/Box";
import GDatePickerEl from "../formElements/GDatePickerEl";
import {useTranslation} from "react-i18next";
import {styled} from "@mui/system";
import {NavLink} from "@remix-run/react";
import TableViewIcon from '@mui/icons-material/TableView';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NightlightIcon from '@mui/icons-material/Nightlight';
const MenuUserBox = styled(Box)(
    ({theme}) => `
        background: ${theme.colors?.alpha?.black[5]};
        padding: ${theme.spacing(2)};
`
);

function GPageGrid(props) {

    const {t, ready} = useTranslation('common')
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    if (!ready) return <></>
    return (
        <Grid item xs={12} sx={{marginBottom: '24px'}}
              className={props.className}
        >
            <Card className={props.cardClass ?? ""}>
                <CardHeader title={props.cardHeader}
                            className={props.headerClass ?? ""}
                            subheader={props.subheader ?? null}
                            action={props.hasAction ? (
                                <>
                                    <IconButton className={'white'} ref={ref} onClick={handleOpen}>
                                        <MoreHorizIcon fontSize="medium"/>
                                    </IconButton>
                                    <Popover
                                        anchorEl={ref.current}
                                        onClose={handleClose}
                                        open={isOpen}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        
                                    >
                                        <MenuUserBox sx={{minWidth: 210}} display="flex" className={'p-0'}>
                                            <Box variant={'div'} className={'w-100 p-0'}>
                                                <List sx={{ p: 0 }} component="nav" className={'sm-nav'}>
                                                {props.excel ? (
                                                    <>
                                                        {/*<Button*/}
                                                        {/*    sx={{mt: {xs: 2, md: 0}}}*/}
                                                        {/*    variant="contained"*/}
                                                        {/*    onClick={(e) => props.excelFn(e)}*/}
                                                        {/*    className={'w-100 mb-12'}*/}
                                                        {/*>*/}
                                                        {/*    {t('excel_export')}*/}
                                                        {/*</Button>*/}
                                                            <ListItem component={"span"} sx={{p:1}} id={'excelExport'}>
                                                                <TableViewIcon fontSize="small" />
                                                                <ListItemText primary={t('excel_export')} />
                                                            </ListItem>
                                                    </>
                                                ) : null}
                                                {props.print ? (
                                                    <>
                                                        {/*<Button*/}
                                                        {/*    sx={{mt: {xs: 2, md: 0}}}*/}
                                                        {/*    variant="contained"*/}
                                                        {/*    onClick={(e) => props.excelFn(e)}*/}
                                                        {/*    className={'w-100'}*/}
                                                        {/*>*/}
                                                        {/*    {t('print_export')}*/}
                                                        {/*</Button>*/}
                                                        <ListItem to="/management/profile/details" component={"span"} sx={{p:1}} id={pdfExport}>
                                                            <FileDownloadIcon fontSize="small" />
                                                            <ListItemText primary={t('print_export')} />
                                                        </ListItem>
                                                        {/*<Divider/>*/}
                                                        {/*<Divider/>*/}
                                                    </>
                                                ) : null}
                                                {props.month ? (
                                                    <>
                                                        {/*<Button*/}
                                                        {/*    sx={{mt: {xs: 2, md: 0}}}*/}
                                                        {/*    variant="contained"*/}
                                                        {/*    onClick={(e) => props.excelFn(e)}*/}
                                                        {/*    className={'w-100 mb-12 mt-12'}*/}
                                                        {/*>*/}
                                                        {/*    {t('monthly_scheduling')}*/}
                                                        {/*</Button>*/}
                                                        <ListItem to="/management/profile/details" component={"span"} sx={{p:1}} id={'monthFilter'}>
                                                            <NightlightIcon fontSize="small" />
                                                            <ListItemText primary={t('monthly_scheduling')} />
                                                        </ListItem>
                                                        {props.dateFilters ? <Divider/> : null}
                                                    </>
                                                ) : null}
                                                {props.dateFilters ? (
                                                    <div className={`d-flex flex-column date-filters-wrapper ${props.month ? 'mt-12' : ''}`}>
                                                        <GDatePickerEl
                                                            label={t("from")}
                                                        />
                                                        <GDatePickerEl
                                                            label={t("to")}
                                                        />
                                                        <Button
                                                            id={'dateFilter'}
                                                            sx={{mt: {xs: 2, md: 0}}}
                                                            variant="contained"
                                                            onClick={(e) => props.btnFn(e)}
                                                        >
                                                            {t('apply')}
                                                        </Button>
                                                    </div>
                                                ) : null}
                                                </List>
                                            </Box>
                                        </MenuUserBox>
                                    </Popover>
                                </>
                            ) : null
                            }
                />
                <Divider/>
                {props.children}
            </Card>
        </Grid>
    );
}

export default GPageGrid;