import { createMuiTheme } from "@material-ui/core/styles";
import {
  beige,
  black,
  gray,
  grayDark,
  grayDarkest,
  white,
} from "./utils/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: black,
      main: white,
    },
    secondary: {
      dark: gray,
      main: beige,
    },
    background: {
      dark: black,
      default: white,
      gray,
      grayDark,
      grayDarkest,
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
    caption: {
      fontFamily: "Open Sans, Arial",
      fontSize: "1.4rem",
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: "1.4rem",
    },
    h1: {
      fontFamily: "Open Sans, Arial",
    },
    h2: {
      fontFamily: "Open Sans, Arial",
      fontSize: "3.35rem",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Open Sans, Arial",
      fontSize: "2rem",
      fontWeight: 600,
    },
    logo: {
      fontFamily: "Oleo Script, cursive",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontFamily: "Raleway, Arial",
        },
      },
    },
  },
});

export default theme;
