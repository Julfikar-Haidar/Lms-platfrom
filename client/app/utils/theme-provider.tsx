"use client";
import * as Recat from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

function ThemesProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props} >{children}</NextThemesProvider>;
}

export default ThemesProvider;
