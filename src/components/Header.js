import { AppBar, Link, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#303030',
        display: 'flex',
        height: '95px',
        justifyContent: 'center',
        position: 'static',
    },
    link: {
        marginRight: '30px',
    },
    toolbar: {
        alignSelf: 'flex-end',
        height: '100%',
        maxWidth: '1230px',
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link href="#" className={classes.link}>
                    Home
                </Link>
                <Link href="#" className={classes.link}>
                    About
                </Link>
                <Link href="#" className={classes.link}>
                    Portfolios
                </Link>
                <Link href="#" className={classes.link}>
                    Team
                </Link>
                <Link href="#" className={classes.link}>
                    Blog
                </Link>
                <Link href="#" className={classes.link}>
                    Contact
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
