import { ToastContainer } from 'react-toastify';
import { Loader, Navbar } from '..';

const LoaderScreen: React.FC = () => {
  return (
    <div className="main-container">
      <ToastContainer />
      <Navbar />
      <div className="container mx-auto mt-8">
        <Loader />
      </div>
    </div>
  );
};

export default LoaderScreen;