import { BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.appBar}>
        </BottomNavigation>
    );
}

export default Header;
