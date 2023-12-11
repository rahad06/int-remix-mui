import PropTypes from 'prop-types';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {Typography, Button, Grid, Box, Tooltip, IconButton} from '@mui/material';
import HeaderUserbox from "../../layout/HeaderExtras/HeaderUserBox";
import MobileMenuIcon from '../../layout/HeaderExtras/MobileMenuIcon'
import Search from "../../singleComponents/Search";
const PageTitle = ({
    addId='',
    backId='',
    revisionId='',
    editId='',
                       heading = '', 
                       subHeading = '', 
                       docs = '', 
    btnFn = () => {},
                       noAddBtn= false, 
                       noBtn= false, 
                       btnText= "", 
                       editText="", 
                       backText="", 
                       hasEdit= false, 
                       hasBack=false, 
                       noSearch=false,
                       isClick = false,
                       hasRevision=false,
    revisionText = '',
                       revisionHref=()=>{},
                       revisionColor = '',
    href='',
    saveRef = '',
    btnColor = '',
                       ...rest }) => {
  return (
      <>
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      {...rest}
        spacing={1}
    >
        <Grid item xs={8} md={9}
              className={'header-page-name'}
        >
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={'mobile-header-s1 f-nowrap'}
        >
        <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
        {noBtn ? null : (
            <>
            <Grid
                item
            >
                <Grid
                    container
                    spacing={1}
                    justifyContent="space-between"
                    alignItems="center"
                    className={'f-nowrap'}
                    {...rest}>
                {noAddBtn ? null : (
                    <Grid item>
                        {isClick ? (
                            <Button
                                id={addId ?? "pageAddBtn"}
                                rel="noopener noreferrer"
                                sx={{mt: {xs: 2, md: 0}}}
                                variant="contained"
                                onClick={(e) => btnFn(e)}
                                startIcon={<AddTwoToneIcon fontSize="small"/>}
                            >
                                {" "}{btnText}
                            </Button>
                        ) : (
                        <Button
                            id={addId ?? "pageAddBtn"}
                            href={docs}
                            rel="noopener noreferrer"
                            sx={{mt: {xs: 2, md: 0}}}
                            variant="contained"
                            startIcon={<AddTwoToneIcon fontSize="small"/>}
                        >
                            {" "}{btnText}
                        </Button>
                        )}
                    </Grid>
                )}
                {hasBack ? (
                    <Grid item>
                    <Button
                        id={backId ?? "pageBackBtn"}
                        href={href}
                        sx={{ margin: 1 }}
                        variant="contained"
                        color="secondary"
                    >
                        {backText}
                    </Button>
                    </Grid>
                ) : null}
                    {hasRevision ? (
                        <Grid item>
                        <Button
                            id={revisionId ?? "pageRevisionBtn"}
                            onClick={() => revisionHref()}
                            sx={{ margin: 1 }}
                            variant="contained"
                            color={revisionColor}
                        >
                            {revisionText}
                        </Button>
                        </Grid>
                  ) : null}
                {hasEdit ? (
                    <Grid item>
                        {isClick ? (
                            <Button
                                id={editId ?? 'pageEditBtn'}
                                rel="noopener noreferrer"
                                sx={{ margin: 1 }}
                                variant="contained"
                                onClick={(e) => btnFn()}
                                color={btnColor ? "primary" : "success"}
                            >
                                {editText}
                            </Button>
                        ) : (
                    <Button
                        id={editId ?? 'pageEditBtn'}
                        href={saveRef}
                        sx={{ margin: 1 }}
                        variant="contained"
                        color={btnColor ? "primary" : "success"}
                    >
                        {editText}
                    </Button>
                            )}
                    </Grid>
                ) : null}
            </Grid>
            </Grid>
      </>
        )}
         </Grid>
        </Grid>
        <Grid item xs={4} md={3}>
        <Box className={'header-user-box'} display="flex" alignItems="center">
            {noSearch ? null : (
                <Grid item>
                    <Search/>
                </Grid>
            )}
            <HeaderUserbox />
            <MobileMenuIcon/>
        </Box>
    </Grid>
    </Grid>
</>
  );
};

PageTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  docs: PropTypes.string
};

export default PageTitle;
