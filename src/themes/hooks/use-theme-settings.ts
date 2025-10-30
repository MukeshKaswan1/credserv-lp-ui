import { useContext } from 'react';
import { ThemeSettingsContext } from '../theme-settings';
import { ThemeSettings } from '../types';

export const useThemeSettings = (): ThemeSettings => useContext(ThemeSettingsContext);
