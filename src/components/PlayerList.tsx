import InfiniteScroll from 'react-infinite-scroll-component';
import loader from '../assets/loading.gif';
import { useGlobalPlayersContext, useGlobalFavoriteContext, useGlobalUIContext } from '../hooks/useGlobalContext';

import { PlayerItem, Loader, ToggleFavoritesBtn } from './';

const PlayerList = () => {
  const { players, loading, error, loadMorePlayers, hasMore } = useGlobalPlayersContext();
  const { favorites } = useGlobalFavoriteContext();
  const { showFavorites } = useGlobalUIContext();

  const allPlayers = players.filter(player => !favorites.some(item => item.id === player.id));

  if (loading && !players.length) {
    return <Loader />;
  }

  return (
    <div className={`container relative mx-auto sm:block ${showFavorites ? 'hidden' : 'block'}`}>
      <h2 className="text-lg font-bold text-center mb-2">All Players</h2>
      <ToggleFavoritesBtn text='show favorites' />
      <InfiniteScroll
        dataLength={players.length}
        next={loadMorePlayers}
        hasMore={hasMore}
        loader={<div className="text-center"><img src={loader} alt="Loading more players..." /></div>}
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

export default PlayerList;
