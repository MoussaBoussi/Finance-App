import { ITheme } from 'types';

const Theme: ITheme = {
  zIndex: {
    modal: 1300,
    snackbar: 1400,
    drawer: 1200,
    appBar: 1100,
    mobileStepper: 1000,
    tooltip: 1500,
  },
  palette: {
    background: { paper: '#fff', default: '#fafafa' },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A700: '#616161',
      A100: '#d5d5d5',
      A400: '#303030',
      A200: '#aaaaaa',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    secondary: {
      main: '#03A9F4',
      light: 'rgb(53, 186, 246)',
      dark: 'rgb(2, 118, 170)',
      contrastText: '#FAFAFA',
    },
    common: { black: '#000', white: '#fff' },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    primary: {
      main: '#AD1457',
      light: 'rgb(189, 67, 120)',
      dark: 'rgb(121, 14, 60)',
      contrastText: '#fff',
    },
  },
  themeName: 'LightMode',
};

export default Theme;
