import { ReactNode } from 'react';

export type Player = {
	id: number;
	first_name: string;
	last_name: string;
	team: {
		full_name: string;
	};
};

export type FavoriteContextType = {
	favorites: Player[];
	addToFavorites: (player: Player) => void;
	removeFromFavorites: (playerId: number) => void;
};

export type FavoriteProviderProps = {
	children: ReactNode;
};

export type Response = {
	data: Player[];
	meta: {
		next_cursor: number | null;
		per_page: number;
	};
};