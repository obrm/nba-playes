import React, { createContext, useState } from 'react';
import { FavoriteContextType, FavoriteProviderProps, Player } from '../types/types';


export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  addToFavorites: () => { },
  removeFromFavorites: () => { },
});

export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Player[]>([]);

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