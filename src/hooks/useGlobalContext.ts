import { useContext } from 'react';

import type { FavoriteContextInterface, FavoritesThemeContextInterface, PlayersContextInterface } from '../types/interfaces';
import { FavoriteContext, PlayersContext, FavoritesThemeContext } from '../context';

export const useGlobalFavoriteContext = (): FavoriteContextInterface => {
	const context = useContext(FavoriteContext);
	if (!context) {
		throw new Error('useGlobalFavoriteContext must be used within a FavoriteProvider');
	}
	return context;
};

export const useGlobalPlayersContext = (): PlayersContextInterface => {
	const context = useContext(PlayersContext);
	if (!context) {
		throw new Error('useGlobalPlayersContext must be used within a PlayersProvider');
	}
	return context;
};

export const useGlobalThemeContext = (): FavoritesThemeContextInterface => {
	const context = useContext(FavoritesThemeContext);
	if (!context) {
		throw new Error('useGlobalThemeContext must be used within a FavoritesThemeProvider');
	}
	return context;
};
