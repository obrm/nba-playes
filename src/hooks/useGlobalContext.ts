import { useContext } from 'react';
import type { FavoriteContextType } from '../types/types.d.ts';
import { FavoriteContext } from './../context/FavoriteContext';

export const useGlobalFavoriteContextContext =
	(): FavoriteContextType => {
		return useContext(FavoriteContext);
	};
