import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { IFavoriteContext, IPlayer, IProviderProps } from '../types/interfaces';

const FavoriteContext = createContext<IFavoriteContext | undefined>(undefined);

export const FavoriteProvider: React.FC<IProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<IPlayer[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    try {
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error('Failed to parse favorites from localStorage:', error);
      return [];
    }
  });
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = useCallback((player: IPlayer) => {
    setFavorites((prevFavorites) => [...prevFavorites, player]);
  }, []);

  const removeFromFavorites = useCallback((playerId: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter(player => player.id !== playerId));
  }, []);

  const toggleShowFavorites = useCallback(() => {
    setShowFavorites((prevShowFavorites) => !prevShowFavorites);
  }, []);

  const providerValue = useMemo(() => ({
    favorites,
    showFavorites
  }), [favorites, showFavorites]);

  return (
    <FavoriteContext.Provider value={{
      ...providerValue,
      addToFavorites,
      removeFromFavorites,
      toggleShowFavorites
    }}>
      {children}
    </FavoriteContext.Provider>
  );

};

export default FavoriteContext;