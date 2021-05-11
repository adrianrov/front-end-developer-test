import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import RalewayRegularTTF from '../Resources/Fonts/Raleway regular.ttf';

const ralewayRegular = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayRegularTTF}) format('ttf')
  `,
};

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
    typography: {
      fontFamily: 'Raleway, Arial',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [ralewayRegular],
        },
      },
    },
  });
  
  export default theme;