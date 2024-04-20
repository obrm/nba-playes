import { Suspense, lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import {
  useGlobalFavoriteContext,
  useGlobalPlayersContext,
  useGlobalThemeContext,
  useIsMobile
} from './hooks';

import {
  Navbar,
  Loader
} from './components';
import LoaderScreen from './components/LoaderScreen';

const PlayersList = lazy(() => import('./components/PlayersList'));
const FavoritesList = lazy(() => import('./components/FavoritesList'));


const App = () => {
  const { players, loading } = useGlobalPlayersContext();
  const { isShowFavorites } = useGlobalFavoriteContext();
  const { isDarkTheme } = useGlobalThemeContext();

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isDarkTheme && isMobile && isShowFavorites) {
      document.body.style.backgroundColor = '#333';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }, [isDarkTheme, isMobile, isShowFavorites]);

  if (loading && !players.length) {
    return <LoaderScreen />;
  }

  return (
    <div className="main-container">
      <ToastContainer />
      <Navbar />
      <div className="container mx-auto mt-8">
        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <PlayersList />
            <FavoritesList />
          </div>
        </Suspense>
      </div>
    </div>
  );

};

export default App;