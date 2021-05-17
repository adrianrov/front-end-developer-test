import { BottomNavigation, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Brand from "./Footer/Brand";
import Contact from "./Footer/Contact";
import Feeds from "./Footer/Feeds";
import Recent from "./Footer/Recent";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.grayDark,
    flexFlow: "row wrap",
    height: "auto",
  },
  copyright: {
    alignItems: "center",
    backgroundColor: theme.palette.background.grayDarkest,
    color: "#595959",
    display: "flex",
    fontFamily: "Open Sans, Arial",
    fontSize: "1.4rem",
    justifyContent: "center",
    textAlign: "center",
    height: "70px",
    width: "100%",
  },
  main: {
    display: "flex",
    flexFlow: "row wrap",
    minHeight: "400px",
    maxWidth: "1230px",
    padding: "60px 25px 15px",
    width: "100%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.container} component="footer">
      <Grid className={classes.main}>
        <Brand />
        <Recent />
        <Feeds />
        <Contact />
      </Grid>
      <Box className={classes.copyright}>
        ©2021 Imran Khan All Rights Reserved
      </Box>
    </BottomNavigation>
  );
};

export default Footer;
