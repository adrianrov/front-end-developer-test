import { BottomNavigation, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.grayDark,
    flexFlow: "row wrap",
    height: "auto",
  },
  copyright: {
    alignItems: "center",
    backgroundColor: theme.palette.background.grayDarkest,
    color: theme.palette.secondary.light,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    height: "70px",
    width: "100%",
  },
  logo: {
    ...theme.typography.logo,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
    flex: "1 1 100%",
    textAlign: "left",
  },
  main: {
    display: "flex",
    flexFlow: "row wrap",
    minHeight: "400px",
    maxWidth: "1230px",
    width: "100%",
  },
  section: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    marginBottom: "30px",
    padding: "0 15px",
  },
  sectionText: {
    color: theme.palette.secondary.main,
    margin: "0 auto 30px",
    textAlign: "left",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.container} component="footer">
      <Grid className={classes.main}>
        <Grid className={classes.section} item xs={12} md={6} lg={3}>
          <Link className={classes.logo} href="/">
            Mairala
          </Link>
          <Typography
            className={classes.sectionText}
            component="p"
            variant="subtitle1"
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore.
          </Typography>
          <Typography
            className={classes.sectionText}
            component="p"
            variant="subtitle1"
          >
            eugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis
            dolore te feugait nulla facilisi. Nam liber tempor cum soluta
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            className={classes.sectionTitle}
            component="h3"
            variant="h4"
          >
            Recent Posts
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            className={classes.sectionTitle}
            component="h3"
            variant="h4"
          >
            Twitter Feed
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            className={classes.sectionTitle}
            component="h3"
            variant="h4"
          >
            Our Address
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.copyright}>
        ©2021 Imran Khan All Rights Reserved
      </div>
    </BottomNavigation>
  );
};

export default Footer;
