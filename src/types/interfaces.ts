import { ReactNode } from 'react';

export interface IPlayer {
	id: number;
	first_name: string;
	last_name: string;
	team: {
		full_name: string;
	};
}

export interface IFavoriteContext {
	favorites: IPlayer[];
	showFavorites: boolean;
	addToFavorites: (player: IPlayer) => void;
	removeFromFavorites: (playerId: number) => void;
	toggleShowFavorites: () => void;
}

export interface IProviderProps {
	children: ReactNode;
}

export interface IPlayersContext {
	players: IPlayer[];
	loading: boolean;
	error: boolean;
	search: string;
	hasMore: boolean;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	loadMorePlayers: () => void;
}

export interface IFavoritesThemeContext {
	theme: string;
	isDarkTheme: boolean;
	toggleTheme: () => void;
}

export interface IMeta {
	next_cursor: number | null;
	per_page: number;
}

export interface IApiResponse {
	data: IPlayer[];
	meta: IMeta;
}

export interface IPlayerItemProps {
	player: IPlayer;
	isDarkTheme?: boolean;
	theme?: string;
}

export interface ITextInputProps {
	placeholder: string;
}

export interface ITitleProps {
	title: string;
}

export interface IToggleFavoriteBtnProps {
	player: IPlayer;
}

export interface IToggleFavoritesButtonProps {
	text: string;
};
