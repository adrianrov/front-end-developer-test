import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  button: {
    backgroundColor: theme.palette.background.gray,
    color: theme.palette.primary.main,
    fontSize: "1.4rem",
    height: "60px",
    width: "264px",
  },
  container: {
    position: "relative",
    width: "100%",
    height: "345px",
    [theme.breakpoints.up("md")]: {
      height: "515px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "675px",
    },
  },
  icon: {
    marginLeft: "5px",
  },
  image: {
    height: "100%",
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      width: "100%",
    },
  },
  main: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    margin: "0 0 30px",
    maxWidth: "800px",
    textTransform: "uppercase",
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
      margin: "0 0 60px",
    },
  },
  overlay: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    opacity: 0.8,
    width: "100%",
  },
  strong: {
    color: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.primary.main,
    fontFamily: "OpenSans, Arial",
    fontWeight: 600,
    margin: "0 0 30px",
    textTransform: "uppercase",
  },
  textWrap: {
    padding: "0 30px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1230px",
    width: "100%",
  },
}));

const Marquee = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.background}>
        <img className={classes.image} alt="" src="/images/bg.webp" />
        <div className={classes.overlay} />
      </Box>
      <Box className={classes.textWrap}>
        <Typography className={classes.text} component="p" variant="subtitle1">
          Grab your copy of
        </Typography>
        <Typography className={classes.main} component="p" variant="subtitle2">
          The <strong className={classes.strong}>premium</strong> quality PSD
          template for <strong className={classes.strong}>free</strong>
        </Typography>
        <Button className={classes.button} component="a" href="/">
          Download
          <FontAwesomeIcon className={classes.icon} icon="download" />
        </Button>
      </Box>
    </Box>
  );
};

export default Marquee;
