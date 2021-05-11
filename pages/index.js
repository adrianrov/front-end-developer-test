import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../src/components/Layout';
import Services from '../src/components/Services';
import Blog from '../src/components/Blog';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
}));

const Index = ({ posts }) => {
  const classes = useStyles();

  return (
  <Layout>
    <Grid className={classes.container} component="main">
      <Services />
      <Blog posts={posts} />
    </Grid>
  </Layout>
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.nuxtjs.dev/posts');
  const posts = await res.json();

  console.log(`Posts data fetched. Count ${posts.length}`);

  return {
    posts
  }
}

export default Index;

