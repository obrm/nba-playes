import { useGlobalPlayersContext, useGlobalFavoriteContext } from '../../hooks';

import { PlayersListInfiniteScroll, ToggleFavoritesBtn, Title } from '..';

const PlayersListContainer = () => {
  const { error } = useGlobalPlayersContext();
  const { showFavorites } = useGlobalFavoriteContext();

  return (
    <div className={`container relative bg-white border border-gray-200 rounded-lg p-3 pt-5 -mt-5 mx-auto sm:block ${showFavorites ? 'hidden' : 'block'}`}>
      <Title title="All Players" />
      <ToggleFavoritesBtn text='show favorites' />
      <PlayersListInfiniteScroll />
      {error && <div className="text-red-500 text-center mt-8">Error loading players</div>}
    </div>
  );
};

export default PlayersListContainer;
