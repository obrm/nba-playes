import { useContext } from 'react';

import type { FavoriteContextType, FavoritesThemeContextType, PlayersContextType } from '../types/types.d.ts';
import { FavoriteContext, PlayersContext, FavoritesThemeContext } from '../context';

export const useGlobalFavoriteContext = (): FavoriteContextType => {
	const context = useContext(FavoriteContext);
	if (!context) {
		throw new Error('useGlobalFavoriteContext must be used within a FavoriteProvider');
	}
	return context;
};

export const useGlobalPlayersContext = (): PlayersContextType => {
	const context = useContext(PlayersContext);
	if (!context) {
		throw new Error('useGlobalPlayersContext must be used within a PlayersProvider');
	}
	return context;
};

export const useGlobalThemeContext = (): FavoritesThemeContextType => {
	const context = useContext(FavoritesThemeContext);
	if (!context) {
		throw new Error('useGlobalThemeContext must be used within a FavoritesThemeProvider');
	}
	return context;
};
