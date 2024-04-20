import { useGlobalFavoriteContext, useGlobalThemeContext } from '../../hooks';
import { PlayerItem } from '..';

const FavoritesList: React.FC = () => {
  const { favorites } = useGlobalFavoriteContext();
  const { isDarkTheme, theme } = useGlobalThemeContext();

  if (!favorites.length) {
    return <div className={`text-center mt-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-500'}`}>No favorites added yet.</div>;
  }
  return (
    <ul className="list-none p-3 sm:p-0">
      {favorites.map((player) => (
        <PlayerItem key={player.id} player={player} isDarkTheme={isDarkTheme} theme={theme} />
      ))}
    </ul>
  );
};

export default FavoritesList;