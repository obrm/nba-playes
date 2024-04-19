import { useContext } from 'react';
import type { FavoriteContextType, PlayersContextType } from '../types/types.d.ts';
import { FavoriteContext, PlayersContext, UIContext } from '../context';

export const useGlobalFavoriteContext = (): FavoriteContextType => {
	return useContext(FavoriteContext) as FavoriteContextType;
};

export const useGlobalPlayersContext = (): PlayersContextType => {
	return useContext(PlayersContext) as PlayersContextType;
};

export const useGlobalUIContext = () => {
	return useContext(UIContext);
};