import { useContext } from 'react';

import type { IFavoriteContext, IFavoritesThemeContext, IPlayersContext } from '../types/interfaces';
import { FavoriteContext, PlayersContext, FavoritesThemeContext } from '../context';

export const useGlobalFavoriteContext = (): IFavoriteContext => {
	const context = useContext(FavoriteContext);
	if (!context) {
		throw new Error('useGlobalFavoriteContext must be used within a FavoriteProvider');
	}
	return context;
};

export const useGlobalPlayersContext = (): IPlayersContext => {
	const context = useContext(PlayersContext);
	if (!context) {
		throw new Error('useGlobalPlayersContext must be used within a PlayersProvider');
	}
	return context;
};

export const useGlobalThemeContext = (): IFavoritesThemeContext => {
	const context = useContext(FavoritesThemeContext);
	if (!context) {
		throw new Error('useGlobalThemeContext must be used within a FavoritesThemeProvider');
	}
	return context;
};
