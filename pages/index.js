import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fetch from "isomorphic-unfetch";
import Layout from "../src/components/Layout";
import Marquee from "../src/components/Marquee";
import Services from "../src/components/Services";
import Blog from "../src/components/Blog";

const useStyles = makeStyles(() => ({
  container: {
    margin: "0 auto",
    width: "100%",
  },
}));

const Index = ({ posts }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid className={classes.container} component="main">
        <Marquee />
        <Services />
        <Blog posts={posts} />
      </Grid>
    </Layout>
  );
};

Index.defaultProps = {
  posts: [],
};

Index.propTypes = {
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

Index.getInitialProps = async () => {
  const res = await fetch("https://api.nuxtjs.dev/posts");
  const posts = await res.json();

  return {
    posts,
  };
};

export default Index;
