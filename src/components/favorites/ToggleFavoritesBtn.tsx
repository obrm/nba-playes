import { useGlobalFavoriteContext } from '../../hooks';
import { IToggleFavoritesButtonProps } from '../../types/interfaces';

const ToggleFavoritesBtn: React.FC<IToggleFavoritesButtonProps> = ({ text }) => {
  const { toggleShowFavorites } = useGlobalFavoriteContext();

  return (
    <div className="sm:hidden absolute right-4 toggle-favorites-btn">
      <button onClick={toggleShowFavorites} className="text-red-500 text-sm font-bold underline">
        {text}
      </button>
    </div>
  );
};

export default ToggleFavoritesBtn;