import React from 'react';
import PageTitleWrapper from "../PageTitleWrapper";
import PageTitle from "../PageTitle";

import {Container, Grid} from "@mui/material";
import Footer from "../../singleComponents/Footer";

function GPageWrapper(props) {
    
    return (
        <>
            <PageTitleWrapper>
                <PageTitle
                    addId={props.addId}
                    revisionId={props.revisionId}
                    backId={props.backId}
                    editId={props.editId}
                    href={props.href}
                    heading={props.pageName}
                    subHeading={props.subHeading}
                    noAddBtn={props.noAddBtn}
                    noBtn={props.noBtn}
                    hasEdit={props.hasEdit}
                    hasBack={props.hasBack}
                    editText={props.editText}
                    backText={props.backText}
                    btnText={props.btnText}
                    docs={props.btnClick}
                    btnFn={props.btnFn}
                    isClick={props.isClick}
                    noSearch={props.noSearch}
                    btnColor={props.btnColor}
                    saveRef={props.saveRef}
                    revisionText={props.revisionText}
                    revisionColor={props.revisionColor}
                    revisionHref={props.revisionHref}
                    hasRevision={props.hasRevision}
                />
            </PageTitleWrapper>
            <Container maxWidth="xl" sx={{    
                minHeight: 'calc(100vh - 192px)',
            }}
                       className={'main-container'}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
            {props.children}
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default GPageWrapper;