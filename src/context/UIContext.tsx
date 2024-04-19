import React, { createContext, useContext, useState } from 'react';
import { ProviderProps, UIContextType } from '../types/types';

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<ProviderProps> = ({ children }) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <UIContext.Provider value={{ showFavorites, toggleShowFavorites }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContext;
