import { useGlobalFavoriteContext } from '../hooks/useGlobalContext';
import { ToggleFavoritesButtonProps } from '../types/types';

const ToggleFavoritesBtn: React.FC<ToggleFavoritesButtonProps> = ({ text }) => {
  const { toggleShowFavorites } = useGlobalFavoriteContext()

  return (
    <div className="sm:hidden absolute right-4" style={{ top: '2.5px' }}>
      <button onClick={toggleShowFavorites} className="text-red-500 font-bold underline">
        {text}
      </button>
    </div>
  );
};

export default ToggleFavoritesBtn;