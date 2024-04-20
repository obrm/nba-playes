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
	showFavorites: boolean;
	addToFavorites: (player: Player) => void;
	removeFromFavorites: (playerId: number) => void;
	toggleShowFavorites: () => void;
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

export type FavoritesThemeContextType = {
	theme: string;
	isDarkTheme: boolean;
	toggleTheme: () => void;
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
	isDarkTheme?: boolean;
	theme?: string;
};

export type TextInputProps = {
	placeholder: string;
};

export type ToggleFavoritesButtonProps = {
	text: string;
};
