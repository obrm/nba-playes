import { SearchBar, Logo } from '..';

const Navbar = () => {
  return (
    <div className="navbar bg-primary shadow-md">
      <div className="container mx-auto px-0">
        <Logo />
        <div className="flex-none">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;