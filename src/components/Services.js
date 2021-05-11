import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
}));

const Services = () => {
    const classes = useStyles();

    return (
        <Grid>
            <Typography className={classes.heading} component="h1" variant="h3" xs={12}>
                Services We Provide
            </Typography>
        </Grid>
    );
}

export default Services;