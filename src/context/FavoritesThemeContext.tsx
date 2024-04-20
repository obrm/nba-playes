import React, { createContext, useState } from 'react';

import { ProviderProps, FavoritesThemeContextType } from '../types/types';

const FavoritesThemeContext = createContext<FavoritesThemeContextType | undefined>(undefined);

export const FavoritesThemeProvider: React.FC<ProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<string>(() => localStorage.getItem('favoritesListTheme') || 'light');
  const [isDarkTheme, setIsDark] = useState<boolean>(!!JSON.stringify(localStorage.getItem('favoritesListIsDark')) || false);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDark(!isDarkTheme);
    localStorage.setItem('favoritesListIsDark', isDarkTheme.toString());
    localStorage.setItem('favoritesListTheme', newTheme);
  };

  return (
    <FavoritesThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
      {children}
    </FavoritesThemeContext.Provider>
  );
};

export default FavoritesThemeContext;
