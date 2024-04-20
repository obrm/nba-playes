import Switch from 'react-switch';
import { useGlobalFavoriteContext, useGlobalThemeContext } from '../hooks';
import { PlayerItem, ToggleFavoritesBtn } from './';

const FavoritesList = () => {
  const { favorites, showFavorites } = useGlobalFavoriteContext();
  const { isDarkTheme, theme, toggleTheme } = useGlobalThemeContext();

  return (
    <div className={`container relative pt-5 p-3 rounded-lg -mt-5 mx-auto sm:block ${showFavorites ? 'block' : 'hidden'} favorites-${theme}`}>
      <h2 className="text-lg font-bold text-center mb-4">Favorite Players</h2>
      <div className="flex justify-center items-center mb-4">
        <label htmlFor="theme-switch" className='absolute sm:top-5 sm:right-5 sm:left-auto top-6 left-5'>
          <Switch
            onChange={toggleTheme}
            checked={isDarkTheme}
            onColor="#ffffff"
            onHandleColor="#b5b5b5"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
            id="theme-switch"
          />
        </label>
      </div>
      <ToggleFavoritesBtn text='Go Back' />
      {!favorites.length ? (
        <div className={`text-center ${isDarkTheme ? 'text-gray-300' : 'text-gray-500'} mt-4`}>No favorites added yet.</div>
      ) : (
        <ul className="list-none p-3 sm:p-0">
          {favorites.map((player) => (
            <PlayerItem key={player.id} player={player} isDarkTheme={isDarkTheme} theme={theme} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;