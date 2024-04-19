import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Player, Response } from '../types/types';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_NBA_API_KEY;

const usePlayers = () => {
	const [players, setPlayers] = useState<Player[]>([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [nextCursor, setNextCursor] = useState<number | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPlayers = async () => {
			setIsLoading(true);

			try {
				const response = await axios.get<Response>(API_URL, {
					headers: {
						Authorization: API_KEY,
					},
					params: {
						search: searchQuery,
						per_page: 25,
						cursor: nextCursor,
					},
				});

				setPlayers((prevPlayers) => [...prevPlayers, ...response.data.data]);
				setNextCursor(response.data.meta.next_cursor);
			} catch (error) {
				toast.error('Failed to fetch players. Please try again.');
			}

			setIsLoading(false);
		};

		const timer = setTimeout(fetchPlayers, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery, nextCursor]);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		setPlayers([]);
		setNextCursor(null);
	};

	const loadMorePlayers = () => {
		setNextCursor((prevCursor) => prevCursor ?? 0);
	};

	return {
		players,
		searchQuery,
		isLoading,
		handleSearch,
		loadMorePlayers,
		hasMorePlayers: nextCursor !== null,
	};
};

export default usePlayers;
