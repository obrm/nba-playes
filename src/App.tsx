import { ToastContainer } from 'react-toastify';
import { Navbar, PlayerList, FavoritesList } from './components';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlayerList />
          <FavoritesList />
        </div>
      </div>
    </div>
  );
};

export default App;