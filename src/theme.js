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
