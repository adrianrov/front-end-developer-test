import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        left: '50%',
        minHeight: '270px',
        minWidth: '474px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    imageWrap: {
        margin: '0 auto',
        height: '270px',
        width: '474px',
        overflow: 'hidden',
        position: 'relative',
    },
    inverse: {
        flexDirection: 'row-reverse'
    }
  }));

const parseDate = (date) => {
    try {
        return format(parseISO(date), 'dd MMMM yyyy');
    } catch {
        return '';
    }
};

const Post = ({description, image, position, title, updatedAt}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Grid container className={position % 2 ? classes.inverse : null}>
                <Grid item xs={12} md={6}>
                    <div className={classes.imageWrap}>
                        <img className={classes.image} src={image}></img>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div>{parseDate(updatedAt)}</div>
                    <Typography className={classes.heading} component="h1" variant="h2">
                        {title}
                    </Typography>
                    <p>
                        {description}
                    </p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Post;