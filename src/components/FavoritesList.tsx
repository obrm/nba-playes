import { useGlobalFavoriteContext } from '../hooks/useGlobalContext';
import { PlayerItem, ToggleFavoritesBtn } from './';

const FavoritesList = () => {
  const { favorites } = useGlobalFavoriteContext();

  return (
    <div className={`container relative mx-auto md:block`}>
      <h2 className="text-lg font-bold text-center mb-4">Favorite Players</h2>
      <ToggleFavoritesBtn text='go back' />
      {!favorites.length ? (
        <div className="text-center text-gray-500 mt-4">No favorites added yet.</div>
      ) : (
        <ul className="list-none p-3 sm:p-0">
          {favorites.map((player) => (
            <PlayerItem key={player.id} player={player} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
