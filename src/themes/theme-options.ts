import breakpoints from './breakpoints';
import palette from './palette';
import shadows from './shadows';
import spacing from './spacing';
import { ThemeOptions } from './types';
import { deepmerge } from '@mui/utils';

const ThemeSettingOptions = (options: ThemeOptions) => {
  const { mode } = options;

  const themeConfig = {
    palette: palette(mode),
    typography: {
      fontFamily: [
        'Satoshi',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    shadows: shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette.primary,
      },
    },
  });
};

export default ThemeSettingOptions;
