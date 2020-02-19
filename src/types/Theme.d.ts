export type ITheme = {
  zIndex: {
    modal: number;
    snackbar: number;
    drawer: number;
    appBar: number;
    mobileStepper: number;
    tooltip: number;
  };
  palette: {
    background: { paper: string; default: string };
    grey: {
      '50': string;
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
      A700: string;
      A100: string;
      A400: string;
      A200: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
    };
    divider: string;
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    common: { black: string; white: string };
    error: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  };
  themeName: 'LightMode';
};
