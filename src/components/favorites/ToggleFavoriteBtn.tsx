import React from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useGlobalFavoriteContext } from '../../hooks';
import { ToggleFavoriteBtnProps } from '../../types/interfaces';

const ToggleFavoriteBtn: React.FC<ToggleFavoriteBtnProps> = ({ player }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useGlobalFavoriteContext();

  const isFavorite = (playerId: number) => favorites.some(item => item.id === playerId)

  const toggleFavorite = () => {
    if (isFavorite(player.id)) {
      removeFromFavorites(player.id);
    } else {
      addToFavorites(player);
    }
  }

  return (
    <button
      onClick={toggleFavorite}
      aria-label={isFavorite(player.id) ? 'Remove from favorites' : 'Add to favorites'}
      className="flex items-center justify-center p-2 rounded-full text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    >
      {isFavorite(player.id) ? (
        <IoHeart size="1.5em" className='heart-icon' />
      ) : (
        <IoHeartOutline size="1.5em" className='heart-icon' />
      )}
    </button>
  );
};

export default ToggleFavoriteBtn;