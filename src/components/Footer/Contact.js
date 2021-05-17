import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "./Column";

const useStyles = makeStyles((theme) => ({
  contact: {
    color: theme.palette.secondary.light,
    textDecoration: "none",
    width: "100%",
  },
  contacts: {
    display: "flex",
    flexFlow: "row wrap",
  },
  icon: {
    marginRight: "5px",
  },
  text: {
    color: theme.palette.secondary.light,
    margin: "0 0 60px",
  },
  title: {
    color: theme.palette.secondary.light,
    margin: "0 0 30px",
    width: "100%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Column>
      <Typography className={classes.title} component="h3" variant="h4">
        Our Address
      </Typography>
      <Typography className={classes.text} component="p" variant="subtitle2">
        Investigationes demonstraverunt lectores legere me lius quod ii legunt
        saepius. Claritas est etiam processus dynamicus,luptatum zzril delenit
        augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
      </Typography>
      <Box className={classes.contacts}>
        <Typography
          className={classes.contact}
          href="//maps.google.com/?q=Moonshine St. 14/05 Light, Jupiter&t=m"
          component="a"
          variant="subtitle2"
        >
          <FontAwesomeIcon className={classes.icon} icon="map-marker-alt" />
          Moonshine St. 14/05 Light, Jupiter
        </Typography>
        <Typography
          className={classes.contact}
          href="tel:+001234567890"
          component="a"
          variant="subtitle2"
        >
          <FontAwesomeIcon className={classes.icon} icon="phone-alt" />
          +00 (123) 456 78 90
        </Typography>
        <Typography
          className={classes.contact}
          href="mailto:first.last@email.com"
          component="a"
          variant="subtitle2"
        >
          <FontAwesomeIcon className={classes.icon} icon="envelope" />
          first.last@email.com
        </Typography>
      </Box>
    </Column>
  );
};

export default Contact;
