// ** Type Imports

import { PaletteMode } from '@mui/material';

const DefaultPalette = (mode: PaletteMode) => {
  return {
    mode,
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    primary: {
      main: 'hsl(262.1, 88.3%, 47.8%)',
      light: 'hsl(262.1, 88.3%, 57.8%)',
      dark: 'hsl(262.1, 88.3%, 37.8%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    secondary: {
      main: 'hsl(262.1, 30%, 40%)',
      light: 'hsl(262.1, 30%, 50%)',
      dark: 'hsl(262.1, 30%, 30%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#636363',
      lightText: '#EBEBEB',
      contrastText: '#FFFFFF',
      globalText: '#006834',
    },
    success: {
      main: 'hsl(152.8, 94.15%, 33.53%)',
      light: 'hsl(145, 60%, 55%)',
      dark: 'hsl(145, 60%, 35%)',
      contrastText: 'hsl(0, 0%, 0%)',
    },
    error: {
      main: 'hsl(0, 100%, 50%)',
      light: 'hsl(0, 100%, 60%)',
      dark: 'hsl(0, 100%, 40%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    divider: 'hsl(0, 0%, 85%)',
    action: {
      active: 'hsl(262.1, 5%, 20%)',
      hover: 'hsl(0, 0%, 90%)', // --muted
      selected: 'hsl(0, 0%, 80%)',
      disabled: 'hsl(262.1, 5%, 50%)',
      disabledBackground: 'hsl(0, 0%, 90%)',
    },
    shape: {
      borderRadius: 8, // --radius (0.5rem = 8px)
    },
    customColors: {
      popover: {
        main: 'hsl(0, 0%, 100%)', // --popover
        contrastText: 'hsl(262.1, 5%, 20%)', // --popover-foreground
      },
      accent: {
        main: 'hsl(262.1, 30%, 40%)', // --accent
        contrastText: 'hsl(0, 0%, 100%)', // --accent-foreground
      },
      input: {
        main: 'hsl(0, 0%, 95%)', // --input
      },
      ring: {
        main: 'hsl(262.1, 88.3%, 47.8%)', // --ring
      },
    },
  };
};

export default DefaultPalette;
