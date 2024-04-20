import { useGlobalFavoriteContext, useGlobalThemeContext } from '../hooks';
import { Title, FavoritesList, ToggleFavoritesBtn, ThemeSwitchBtn } from '.';

const FavoritesListContainer = () => {
  const { showFavorites } = useGlobalFavoriteContext();
  const { theme } = useGlobalThemeContext();

  return (
    <div className={`container relative pt-5 p-3 border border-gray-200 rounded-lg -mt-5 mx-auto sm:block ${showFavorites ? 'block' : 'hidden'} favorites-${theme}`}>
      <Title title="Favorite Players" />
      <ThemeSwitchBtn />
      <ToggleFavoritesBtn text='Go Back' />
      <FavoritesList />
    </div>
  );
};

export default FavoritesListContainer;