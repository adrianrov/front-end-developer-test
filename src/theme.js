import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#7b6c63',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });
  
  export default theme;