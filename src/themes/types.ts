import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string;
      borderColor: string;
      tableHeaderBg: string;
      primaryGradient: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      main?: string;
      tableHeaderBg?: string;
      primaryGradient?: string;
    };
  }
}

export interface ThemeConfig {
  mode: PaletteMode;
  templateName: string;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  menuTextTruncate: boolean;
  contentWidth: ContentWidth;
  responsiveFontSizes: boolean;
}

export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type ContentWidth = 'full' | 'boxed';

export type ThemeOptions = {
  mode: PaletteMode;
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
};

export type ThemeSettings = {
  settings: ThemeOptions;
  saveSettings: (updatedSettings: ThemeOptions) => void;
};
