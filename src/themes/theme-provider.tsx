import { PropsWithChildren } from 'react';
import overrides from './overrides';
import themeConfig from './theme-config';
import GlobalStyling from './theme-globals';
import ThemeSettingOptions from './theme-options';
import { ThemeOptions } from './types';
import typography from './typography';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

const ThemeProvider = (props: PropsWithChildren & { settings: ThemeOptions }) => {
  // ** Props
  const { settings, children } = props;

  // ** Merged ThemeOptions of Core and User
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  const coreThemeConfig: any = ThemeSettingOptions(settings);

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme)} />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
