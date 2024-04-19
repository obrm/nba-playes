import React, { createContext, useState } from 'react';

import { ProviderProps, FavoritesThemeContextType } from '../types/types';

const FavoritesThemeContext = createContext<FavoritesThemeContextType | undefined>(undefined);

export const FavoritesThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('favoritesListTheme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('favoritesListTheme', newTheme);
  };

  return (
    <FavoritesThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </FavoritesThemeContext.Provider>
  );
};

export default FavoritesThemeContext;
