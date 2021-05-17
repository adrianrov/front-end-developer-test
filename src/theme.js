import { createMuiTheme } from "@material-ui/core/styles";
import {
  beige,
  black,
  gray,
  grayDark,
  grayDarkest,
  grayLight,
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
      light: grayLight,
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
    subtitle2: {
      fontFamily: "Open Sans, Arial",
      fontSize: "1.2rem",
      fontWeight: 300,
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
    h4: {
      fontFamily: "Open Sans, Arial",
      fontSize: "1.5rem",
      textTransform: "uppercase",
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
