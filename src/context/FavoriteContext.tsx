import React, { createContext, useState, useEffect } from 'react';
import { FavoriteContextType, Player, ProviderProps } from '../types/types';

const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  showFavorites: false,
  addToFavorites: () => { },
  removeFromFavorites: () => { },
  toggleShowFavorites: () => { },
});

export const FavoriteProvider: React.FC<ProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Player[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (player: Player) => {
    setFavorites([...favorites, player]);
  };

  const removeFromFavorites = (playerId: number) => {
    setFavorites(favorites.filter((player) => player.id !== playerId));
  };

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, showFavorites, addToFavorites, removeFromFavorites, toggleShowFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;