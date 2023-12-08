import {Box, Button, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function _index() {
  const {t, ready} = useTranslation('common')
  if(!ready) return <></>
  return (
    <Grid>
      <Box><Button>{t("hello")}</Button></Box>
    </Grid>
  );
}
