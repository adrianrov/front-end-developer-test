import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  active: {
    borderBottom: "5px solid",
    borderBottomColor: theme.palette.secondary.main,
    boxSizing: "border-box",
    margin: 0,
    padding: "8px 0",
  },
  appBar: {
    backgroundColor: theme.palette.background.gray,
    display: "flex",
    height: "95px",
    justifyContent: "center",
    position: "static",
  },
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    maxWidth: "1230px",
    margin: "0 auto",
    padding: "0",
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      padding: "0 30px",
    },
  },
  inactive: {
    borderBottom: "5px solid transparent",
    boxSizing: "border-box",
    margin: 0,
    padding: "8px 0",
  },
  item: {
    boxSizing: "border-box",
    color: theme.palette.primary.main,
    fontSize: "1rem",
    textTransform: "uppercase",
  },
  link: {
    boxSizing: "border-box",
    fontSize: "1rem",
    padding: "0 18px",
    textTransform: "uppercase",
  },
  list: {
    backgroundColor: theme.palette.background.gray,
    height: "100%",
    width: "255px",
  },
  logo: {
    ...theme.typography.logo,
    fontSize: "4rem",
  },
  menu: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    height: "100%",
    position: "absolute",
    right: "0",
    [theme.breakpoints.up("sm")]: {
      right: "15px",
    },
  },
  toolbar: {
    flexGrow: 1,
    justifyContent: "flex-end",
    height: "100%",
    padding: 0,
  },
}));

const options = ["Home", "About", "Portfolios", "Team", "Blog", "Contact"];

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const isMediumDisplay = useMediaQuery(theme.breakpoints.up("md"));
  const [isOpen, setIsOpen] = useState(false);
  const closeDrawer = () => setIsOpen(false);
  const openDrawer = () => setIsOpen(true);

  useEffect(() => {
    if (isMediumDisplay) {
      closeDrawer();
    }
  }, [isMediumDisplay]);

  return (
    <AppBar className={classes.appBar} component="nav">
      <Box className={classes.container}>
        <Link className={classes.logo} href="/">
          Mairala
        </Link>
        {isMediumDisplay ? (
          <Toolbar className={classes.toolbar}>
            {options.map((text) => (
              <Link key={text} href="/" className={classes.link}>
                <div
                  className={
                    text === "Home" ? classes.active : classes.inactive
                  }
                >
                  {text}
                </div>
              </Link>
            ))}
          </Toolbar>
        ) : (
          <>
            <Button className={classes.menu} onClick={openDrawer}>
              <FontAwesomeIcon icon="bars" />
            </Button>
            <SwipeableDrawer
              anchor="right"
              open={isOpen}
              onClose={closeDrawer}
              onOpen={openDrawer}
            >
              <List className={classes.list}>
                {options.map((text) => (
                  <ListItem
                    key={text}
                    href="/"
                    className={classes.item}
                    component="a"
                  >
                    <ListItemText
                      className={
                        text === "Home" ? classes.active : classes.inactive
                      }
                      primary={text}
                    />
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </>
        )}
      </Box>
    </AppBar>
  );
};

export default Header;
