import React from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

import { Player, PlayerItemProps } from '../types/types';
import { useGlobalFavoriteContext } from '../hooks/useGlobalContext';

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useGlobalFavoriteContext();

  const isFavorite = (playerId: number) => favorites.some(item => item.id === playerId);

  const toggleFavorite = (player: Player) => {
    if (isFavorite(player.id)) {
      removeFromFavorites(player.id);
    } else {
      addToFavorites(player);
    }
  };

  return (
    <div
      className="bg-white hover:bg-gray-100 border border-gray-200 rounded my-2 p-4 flex justify-between items-center shadow-sm hover:shadow transition-shadow duration-300 ease-in-out"
    >
      <div>
        {player.first_name} {player.last_name} - {player.team.full_name}
      </div>
      <button
        onClick={() => toggleFavorite(player)}
        aria-label={isFavorite(player.id) ? 'Remove from favorites' : 'Add to favorites'}
        className="flex items-center justify-center p-2 rounded-full text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        {isFavorite(player.id) ? (
          <IoHeart size="1.5em" style={{ color: 'red' }} />
        ) : (
          <IoHeartOutline size="1.5em" style={{ color: 'red' }} />
        )}
      </button>
    </div>
  );
};

export default PlayerItem;
