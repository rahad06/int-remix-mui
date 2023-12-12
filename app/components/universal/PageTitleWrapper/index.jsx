import PropTypes from 'prop-types';
import { Box, Container, styled } from '@mui/material';
import {PureLightTheme} from "../../../theme/schemes/PureLightTheme.jsx";

const PageTitle = styled(Box)(
  ({ theme = PureLightTheme }) => `
        padding: ${theme.spacing(4)};
`
);

const PageTitleWrapper = ({ children }) => {
  return (
    <PageTitle className="MuiPageTitle-wrapper">
      <Container maxWidth="lg">{children}</Container>
    </PageTitle>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;
