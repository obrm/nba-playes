import logo from '../../assets/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex-1 flex items-center">
      <img src={logo} alt="Logo" className="h-8 sm:-ml-3 sm:h-12" />
      <span className="text-sm sm:text-2xl font-bold text-white">NBA Players</span>
    </div>
  );
};

export default Logo;