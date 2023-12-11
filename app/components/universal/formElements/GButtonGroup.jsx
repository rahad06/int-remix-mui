import React from 'react';
import {Button, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

function GButtonGroup(props) {
    const {t, ready, i18n} = useTranslation('common')

    if(!ready) return <></>
    return (
        <Grid item lg={4} md={6} xs={12}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button
                        id={props.backId ?? "backBtn"}
                        href={'..'}
                        sx={{margin: 1, width: '100%'}}
                        variant="contained"
                        color="secondary"
                    >
                        {t("back")}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        id={props.okId ?? "correctBtn"}
                        sx={{margin: 1, width: '100%'}}
                        variant="contained"
                        color="success"
                    >
                        {t("correct")}
                    </Button>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </Grid>
    );
}

export default GButtonGroup;
