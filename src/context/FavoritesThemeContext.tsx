import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { ProviderProps, FavoritesThemeContextInterface } from '../types/interfaces';

const FavoritesThemeContext = createContext<FavoritesThemeContextInterface | undefined>(undefined);

export const FavoritesThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('favoritesListTheme') || 'light');
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => localStorage.getItem('favoritesListIsDark') === 'true');

  useEffect(() => {
    localStorage.setItem('favoritesListTheme', theme);
    localStorage.setItem('favoritesListIsDark', isDarkTheme.toString());
  }, [theme, isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme);
  }, []);

  const providerValue = useMemo(() => ({
    theme,
    isDarkTheme
  }), [theme, isDarkTheme, toggleTheme]);

  return (
    <FavoritesThemeContext.Provider value={{ ...providerValue, toggleTheme }}>
      {children}
    </FavoritesThemeContext.Provider>
  );
};

export default FavoritesThemeContext;