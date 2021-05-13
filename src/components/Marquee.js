import { Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
    height: "345px",
    [theme.breakpoints.up("md")]: {
      height: "515px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "675px",
    },
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
  overlay: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    opacity: 0.8,
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
      <Link className={classes.logo} href="/">
        Mairala
      </Link>
    </Box>
  );
};

export default Marquee;
