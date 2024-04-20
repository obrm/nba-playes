import React from 'react';

import { PlayerItemProps } from '../../types/types';
import { ToggleFavoriteBtn } from '..'

const PlayerItem: React.FC<PlayerItemProps> = ({ player, isDarkTheme, theme }) => {
  return (
    <div
      className={`bg-white ${isDarkTheme ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'} border border-gray-200 rounded my-2 p-4 flex justify-between items-center shadow-sm hover:shadow transition-shadow duration-300 ease-in-out favorites-${theme}`}
    >
      <div>
        {player.first_name} {player.last_name} - {player.team.full_name}
      </div>
      <ToggleFavoriteBtn player={player} />
    </div>
  );
};

export default PlayerItem;
