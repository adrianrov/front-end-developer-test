import PropTypes from "prop-types";
import { Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.secondary.main,
    height: "5px",
    margin: "0 auto 40px",
    width: "75px",
  },
  heading: {
    color: theme.palette.secondary.main,
    margin: "0 auto 50px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  subtitle: {
    color: theme.palette.primary.dark,
    margin: "0 auto 40px",
    textAlign: "center",
    width: "430px",
  },
}));

const Blog = ({ posts }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          className={classes.heading}
          component="h1"
          variant="h2"
          xs={12}
        >
          Our Blog
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          className={classes.subtitle}
          component="p"
          variant="subtitle1"
        >
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim
        </Typography>
      </Grid>
      {posts.map((post, index) => (
        <Post key={post.id} position={index} {...post} />
      ))}
    </Grid>
  );
};

Blog.defaultProps = {
  posts: [],
};

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ),
};

export default Blog;
