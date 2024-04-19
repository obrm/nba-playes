import { useGlobalUIContext } from '../hooks/useGlobalContext';
import { ToggleFavoritesButtonProps } from '../types/types';

const ToggleFavoritesBtn: React.FC<ToggleFavoritesButtonProps> = ({ text }) => {
  const { toggleShowFavorites } = useGlobalUIContext();

  return (
    <div className="sm:hidden absolute top-1 right-4">
      <button onClick={toggleShowFavorites} className="text-red-500 font-bold underline">
        {text}
      </button>
    </div>
  );
};

export default ToggleFavoritesBtn;