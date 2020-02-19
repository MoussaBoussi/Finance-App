import React, { useState, createContext } from 'react';
import { ITheme } from 'types';
import Theme from 'theme';

export const ThemeContext = createContext<ITheme>(Theme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(Theme);
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
