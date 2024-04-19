import { ToastContainer } from 'react-toastify';
import { Navbar, PlayerList, FavoritesList, Loader } from './components';
import { useGlobalPlayersContext } from './hooks/useGlobalContext';

const App = () => {
  const { players, loading } = useGlobalPlayersContext();

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="container mx-auto mt-8">
        {loading && !players.length ?
          <Loader />
          : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PlayerList />
              <FavoritesList />
            </div>
          )}
      </div>
    </div>
  );
};

export default App;