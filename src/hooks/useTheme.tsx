/* eslint-disable  */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { colorsTheme } from '../styles';

type ThemeProps = typeof colorsTheme.light;

type ThemeContextData = {
  theme: ThemeProps;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const deviceTheme = useColorScheme();

  const [theme, setTheme] = useState<ThemeProps>(
    colorsTheme[deviceTheme || 'light'],
  );

  async function toggleTheme() {
    setTheme(prevState =>
      prevState.THEME_TYPE === 'dark'
        ? colorsTheme['light']
        : colorsTheme['dark'],
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export { AppThemeProvider, useTheme };
