import InfiniteScroll from 'react-infinite-scroll-component';
import { useGlobalFavoriteContext, useGlobalPlayersContext } from '../../hooks';
import { PlayerItem } from '..';

const PlayersListInfiniteScroll: React.FC = () => {
  const { players, error, loadMorePlayers, hasMore } = useGlobalPlayersContext();
  const { favorites } = useGlobalFavoriteContext();

  const allPlayers = players.filter(player => !favorites.some(item => item.id === player.id));

  return (
    <InfiniteScroll
      dataLength={players.length}
      next={loadMorePlayers}
      hasMore={hasMore}
      loader={players.length !== 0 && <div className='text-center mb-4'>Loading more players...</div>}
    >
      <ul className="list-none p-3 sm:p-0">
        {allPlayers.length === 0 && !error ? (<div className='text-center mt-8'>No players found for this search term...</div>) : allPlayers.map((player) => (
          <PlayerItem key={player.id} player={player} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default PlayersListInfiniteScroll;