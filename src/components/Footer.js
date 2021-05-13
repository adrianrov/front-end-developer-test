import { BottomNavigation } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Footer = () => {
  const classes = useStyles();

  return <BottomNavigation component="footer"></BottomNavigation>;
};

export default Footer;
