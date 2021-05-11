import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
  }));

const Blog = ({ posts }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.heading} component="h1" variant="h2" xs={12}>
                    Our Blog
                </Typography>
            </Grid>
            {posts.map((post, index) => <Post key={post.id} position={index} {...post} />)}
        </Grid>
    );
};

Blog.propTypes = {
    posts: PropTypes.array,
};

export default Blog;