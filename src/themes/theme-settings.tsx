import { PropsWithChildren, createContext, useState } from 'react';
import themeConfig from './theme-config';
import { ThemeOptions, ThemeSettings } from './types';

const initialThemeOptions: ThemeOptions = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
};

export const ThemeSettingsContext = createContext<ThemeSettings>({
  saveSettings: () => null,
  settings: initialThemeOptions,
});

export const ThemeSettingsProvider = ({ children }: PropsWithChildren) => {
  const [settings, setSettings] = useState<ThemeOptions>({
    ...initialThemeOptions,
  });

  const saveSettings = (updatedSettings: ThemeOptions) => {
    setSettings(updatedSettings);
  };

  return (
    <ThemeSettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </ThemeSettingsContext.Provider>
  );
};

export const ThemeSettingsConsumer = ThemeSettingsContext.Consumer;
