import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { FavoriteContextType, Player, ProviderProps } from '../types/types';

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Player[]>(() => {
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

  const addToFavorites = useCallback((player: Player) => {
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