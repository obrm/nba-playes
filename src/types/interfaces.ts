import { ReactNode } from 'react';

export interface Team {
	full_name: string;
}

export interface Player {
	id: number;
	first_name: string;
	last_name: string;
	team: Team;
}

export interface FavoriteContextInterface {
	favorites: Player[];
	showFavorites: boolean;
	addToFavorites: (player: Player) => void;
	removeFromFavorites: (playerId: number) => void;
	toggleShowFavorites: () => void;
}

export interface ProviderProps {
	children: ReactNode;
}

export interface PlayersContextInterface {
	players: Player[];
	loading: boolean;
	error: boolean;
	search: string;
	hasMore: boolean;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	loadMorePlayers: () => void;
}

export interface FavoritesThemeContextInterface {
	theme: string;
	isDarkTheme: boolean;
	toggleTheme: () => void;
}

export interface Meta {
	next_cursor: number | null;
	per_page: number;
}

export interface ApiResponse {
	data: Player[];
	meta: Meta;
}

export interface PlayerItemProps {
	player: Player;
	isDarkTheme?: boolean;
	theme?: string;
}

export interface TextInputProps {
	placeholder: string;
}

export interface TitleProps {
	title: string;
}

export interface ToggleFavoriteBtnProps {
	player: Player;
}

export interface ToggleFavoritesButtonProps {
	text: string;
};
