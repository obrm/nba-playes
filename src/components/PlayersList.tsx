import InfiniteScroll from 'react-infinite-scroll-component';
import { useGlobalPlayersContext, useGlobalFavoriteContext } from '../hooks';

import { PlayerItem, ToggleFavoritesBtn } from '.';

const PlayersList = () => {
  const { players, error, loadMorePlayers, hasMore } = useGlobalPlayersContext();
  const { favorites, isShowFavorites } = useGlobalFavoriteContext();

  const allPlayers = players.filter(player => !favorites.some(item => item.id === player.id));

  return (
    <div className={`container relative bg-white border border-gray-200 rounded-lg p-3 pt-5 -mt-5 mx-auto sm:block ${isShowFavorites ? 'hidden' : 'block'}`}>
      <h2 className="text-lg font-bold text-center mb-2">All Players</h2>
      <ToggleFavoritesBtn text='show favorites' />
      <InfiniteScroll
        dataLength={players.length}
        next={loadMorePlayers}
        hasMore={hasMore}
        loader={players.length !== 0 && <div className='text-center mb-4'>Loading more players...</div>}
      >
        <ul className="list-none p-3 sm:p-0">
          {allPlayers.map((player) => (
            <PlayerItem key={player.id} player={player} />
          ))}
        </ul>
      </InfiniteScroll>
      {error && <div className="text-red-500 text-center">Error loading players</div>}
    </div>
  );
};

export default PlayersList;
