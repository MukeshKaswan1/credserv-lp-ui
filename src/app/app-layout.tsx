"use client";
import { PropsWithChildren } from "react";
import { ThemeSettingsProvider } from "@/themes/theme-settings";
import ThemeProvider from "@/themes/theme-provider";
import { useThemeSettings } from "@/themes/hooks/use-theme-settings";

function ThemeBridge({ children }: PropsWithChildren) {
  const { settings } = useThemeSettings();
  return <ThemeProvider settings={settings}>{children}</ThemeProvider>;
}

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <ThemeSettingsProvider>
      <ThemeBridge>{children}</ThemeBridge>
    </ThemeSettingsProvider>
  );
}
