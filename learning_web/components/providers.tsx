"use client";

import { ThemeProvider } from "./theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n"; // Import instance i18n của bạn

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Bọc các provider phía client ở đây
    <I18nextProvider i18n={i18n}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}