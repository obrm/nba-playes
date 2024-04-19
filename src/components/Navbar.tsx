
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="navbar bg-primary shadow-md">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex-1 flex items-center">
          <img src={logo} alt="Logo" className="h-8 sm:h-12" />
          <span className="text-lg sm:text-2xl font-bold text-white">NBA Players</span>
        </div>
        <div className="flex-none">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;