import Layout from '../src/components/Layout';
import fetch from 'isomorphic-unfetch';

function Index(props) {
  return (
    <Layout>
    <h1>Posts</h1>
    <div>
      {JSON.stringify(props.posts)}
    </div>
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

