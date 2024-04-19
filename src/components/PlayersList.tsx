import InfiniteScroll from 'react-infinite-scroll-component';
import { useGlobalPlayersContext, useGlobalFavoriteContext } from '../hooks/useGlobalContext';

import { PlayerItem, ToggleFavoritesBtn } from '.';

const PlayersList = () => {
  const { players, error, loadMorePlayers, hasMore } = useGlobalPlayersContext();
  const { favorites, showFavorites } = useGlobalFavoriteContext();

  const allPlayers = players.filter(player => !favorites.some(item => item.id === player.id));

  return (
    <div className={`container relative mx-auto sm:block ${showFavorites ? 'hidden' : 'block'}`}>
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
