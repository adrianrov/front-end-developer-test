import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Column from "./Column";

const useStyles = makeStyles((theme) => ({
  logo: {
    ...theme.typography.logo,
    color: theme.palette.secondary.main,
    fontSize: "4rem",
  },
  text: {
    color: theme.palette.secondary.light,
    margin: "0 auto 30px",
  },
}));

const Brand = () => {
  const classes = useStyles();

  return (
    <Column>
      <Link className={classes.logo} href="/">
        Mairala
      </Link>
      <Typography className={classes.text} component="p" variant="subtitle2">
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore.
      </Typography>
      <Typography className={classes.text} component="p" variant="subtitle2">
        eugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
        qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
        nulla facilisi. Nam liber tempor cum soluta
      </Typography>
    </Column>
  );
};

export default Brand;
