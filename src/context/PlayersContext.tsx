import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { toast } from 'react-toastify';
import { ApiResponse, Player, PlayersContextType, ProviderProps } from '../types/types';

const PlayersContext = createContext<PlayersContextType | undefined>(undefined);

export const PlayersProvider: React.FC<ProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [nextCursor, setNextCursor] = useState<number | null>(null);

  const fetchPlayers = useCallback(async (page: number, searchQuery?: string) => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get<ApiResponse>(`${import.meta.env.VITE_API_URL}/players`, {
        params: {
          search: searchQuery,
          page: page
        },
        headers: {
          'Authorization': import.meta.env.VITE_NBA_API_KEY as string
        }
      });

      const data = response.data;
      if (page === 1) {
        setPlayers(data.data);
      } else {
        setPlayers(prev => [...prev, ...data.data]);
      }
      setNextCursor(data.meta.next_cursor);
    } catch (error: any) {
      setError(true);
      toast.error('Error fetching data: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(debounce((searchQuery: string) => {
    fetchPlayers(1, searchQuery);
  }, 300), []);

  useEffect(() => {
    debouncedSearch(search);
  }, [search, debouncedSearch]);

  const loadMorePlayers = () => {
    if (nextCursor !== null) {
      fetchPlayers(nextCursor);
    }
  };

  return (
    <PlayersContext.Provider value={{ players, loading, error, search, setSearch, loadMorePlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error('usePlayers must be used within a PlayersProvider');
  }
  return context;
};

export default PlayersContext;
