import { useContext } from 'react';
import type { FavoriteContextType, FavoritesThemeContextType, PlayersContextType } from '../types/types.d.ts';
import { FavoriteContext, PlayersContext, FavoritesThemeContext } from '../context';

export const useGlobalFavoriteContext = (): FavoriteContextType => {
	return useContext(FavoriteContext) as FavoriteContextType;
};

export const useGlobalPlayersContext = (): PlayersContextType => {
	return useContext(PlayersContext) as PlayersContextType;
};

export const useGlobalThemeContext = (): FavoritesThemeContextType => {
	return useContext(FavoritesThemeContext) as FavoritesThemeContextType;
};