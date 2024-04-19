import { useGlobalFavoriteContext } from '../hooks/useGlobalContext';
import { PlayerItem } from './';

const FavoritesList = () => {
  const { favorites } = useGlobalFavoriteContext();

  if (!favorites.length) {
    return <div className="text-center text-gray-500 mt-4">No favorites added yet.</div>;
  }

  return (
    <div className="container mx-auto hidden md:block">
      <h2 className="text-lg font-bold text-center mb-4">Favorite Players</h2>
      <ul className="list-none p-0">
        {favorites.map((player) => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
