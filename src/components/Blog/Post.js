import PropTypes from "prop-types";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";

const useStyles = makeStyles(() => ({
  date: {
    margin: "0 auto 15px",
  },
  container: {
    margin: "0 auto 50px",
    maxWidth: "1230px",
    padding: "0 30px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  description: {
    color: theme.palette.secondary.main,
    margin: "0 auto 15px",
  },
  heading: {
    margin: "0 auto 15px",
  },
  image: {
    left: "50%",
    minHeight: "270px",
    minWidth: "474px",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  imageWrap: {
    margin: "0 auto",
    height: "270px",
    width: "474px",
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
  },
  inverse: {
    flexDirection: "row-reverse",
  },
  wrap: {
    boxSizing: "border-box",
    padding: "0 15px",
  },
}));

const parseDate = (date) => {
  try {
    return format(parseISO(date), "dd MMMM yyyy");
  } catch {
    return "";
  }
};

const Post = ({ description, image, position, title, updatedAt }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} item xs={12}>
      <Grid container className={position % 2 ? classes.inverse : null}>
        <Grid className={classes.wrap} item xs={12} md={6}>
          <div className={classes.imageWrap}>
            <img className={classes.image} alt="" src={image} />
          </div>
        </Grid>
        <Grid className={classes.wrap} item xs={12} md={6}>
          <Typography
            className={classes.date}
            component="span"
            variant="caption"
          >
            {parseDate(updatedAt)}
          </Typography>
          <Typography className={classes.heading} component="h2" variant="h3">
            {title}
          </Typography>
          <Typography
            className={classes.description}
            component="p"
            variant="subtitle1"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Post.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default Post;
