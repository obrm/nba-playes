import React, { createContext, useState, useEffect } from 'react';
import { FavoriteContextType, FavoriteProviderProps, Player } from '../types/types';

export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  addToFavorites: () => { },
  removeFromFavorites: () => { },
});

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Player[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.getItem('favorites');
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (player: Player) => {
    setFavorites([...favorites, player]);
  };

  const removeFromFavorites = (playerId: number) => {
    setFavorites(favorites.filter((player) => player.id !== playerId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};