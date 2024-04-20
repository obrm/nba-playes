import React, { createContext, useState, useEffect, useMemo } from 'react';

import { ProviderProps, FavoritesThemeContextType } from '../types/types';

const FavoritesThemeContext = createContext<FavoritesThemeContextType | undefined>(undefined);

export const FavoritesThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('favoritesListTheme') || 'light');
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => localStorage.getItem('favoritesListIsDark') === 'true');

  useEffect(() => {
    localStorage.setItem('favoritesListTheme', theme);
    localStorage.setItem('favoritesListIsDark', isDarkTheme.toString());
  }, [theme, isDarkTheme]);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
    setIsDarkTheme(!isDarkTheme);
  };

  const providerValue = useMemo(() => ({ theme, isDarkTheme, toggleTheme }), [theme, isDarkTheme, toggleTheme]);

  return (
    <FavoritesThemeContext.Provider value={providerValue}>
      {children}
    </FavoritesThemeContext.Provider>
  );

};

export default FavoritesThemeContext;
