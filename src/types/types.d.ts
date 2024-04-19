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

export type ProviderProps = {
	children: ReactNode;
};

export type PlayersContextType = {
	players: Player[];
	loading: boolean;
	error: boolean;
	search: string;
	hasMore: boolean;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	loadMorePlayers: () => void;
};

export type UIContextType = {
	showFavorites: boolean;
	toggleShowFavorites: () => void;
};

export type Meta = {
	next_cursor: number | null;
	per_page: number;
};

export type ApiResponse = {
	data: Player[];
	meta: Meta;
};

export type PlayerItemProps = {
	player: Player;
};

export type ToggleFavoritesButtonProps = {
	text: string;
};