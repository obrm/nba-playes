import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { IProviderProps, IFavoritesThemeContext } from '../types/interfaces';

const FavoritesThemeContext = createContext<IFavoritesThemeContext | undefined>(undefined);

export const FavoritesThemeProvider: React.FC<IProviderProps> = ({ children }) => {
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