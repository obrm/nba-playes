import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import {
  useGlobalFavoriteContext,
  useGlobalPlayersContext,
  useGlobalThemeContext,
  useIsMobile
} from './hooks';

import {
  Navbar,
  PlayersList,
  FavoritesList,
  Loader
} from './components';

const App = () => {
  const { players, loading } = useGlobalPlayersContext();
  const { isShowFavorites } = useGlobalFavoriteContext();
  const { theme } = useGlobalThemeContext();

  const isMobile = useIsMobile();

  useEffect(() => {
    if (theme === 'dark' && isMobile && isShowFavorites) {
      document.body.style.backgroundColor = '#333';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }, [theme, isMobile, isShowFavorites]);

  return (
    <div className="main-container">
      <ToastContainer />
      <Navbar />
      <div className="container mx-auto mt-8">
        {loading && !players.length ?
          <Loader />
          : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <PlayersList />
              <FavoritesList />
            </div>
          )}
      </div>
    </div>
  );
};

export default App;