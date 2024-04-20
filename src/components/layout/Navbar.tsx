import { SearchBar, Logo } from '..';
import { useGlobalFavoriteContext, useIsMobile } from '../../hooks';

const Navbar = () => {
  const isMobile = useIsMobile();
  const { showFavorites } = useGlobalFavoriteContext();
  console.log(isMobile);
  console.log(showFavorites);
  return (
    <div className="navbar bg-primary shadow-md">
      <div className="container mx-auto px-0">
        <Logo />
        <div className="flex-none">
          {!isMobile
            ? (
              <SearchBar />
            ) : isMobile && !showFavorites ? (
              <SearchBar />
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;