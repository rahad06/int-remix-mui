import {Box, Button, Grid} from "@mui/material";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function _index() {
  return (
    <Grid>
      <Box><Button>fedei</Button></Box>
    </Grid>
  );
}
