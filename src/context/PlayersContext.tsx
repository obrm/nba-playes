import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { toast } from 'react-toastify';

import {
  IApiResponse,
  IPlayer,
  IPlayersContext,
  IProviderProps
} from '../types/interfaces';

const PlayersContext = createContext<IPlayersContext | undefined>(undefined);

export const PlayersProvider: React.FC<IProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [nextCursor, setNextCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchPlayers = useCallback(async (page: number, searchQuery = search) => {
    setError(false);

    try {
      const response = await axios.get<IApiResponse>(`${import.meta.env.VITE_API_URL}/players`, {
        params: {
          search: searchQuery,
          cursor: page
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
      setHasMore(data.meta.next_cursor !== undefined);

    } catch (error: any) {
      setError(true);
      toast.error(`Error fetching data: ${error.response?.data?.message || error.message}`, {
        position: "top-center"
      });
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (!search) {
      fetchPlayers(1);
    }
  }, []);

  const debouncedSearch = useCallback(debounce((searchQuery: string) => {
    fetchPlayers(1, searchQuery);
  }, 300), [fetchPlayers]);

  useEffect(() => {
    debouncedSearch(search);
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);


  const loadMorePlayers = () => {
    if (nextCursor) {
      fetchPlayers(nextCursor);
    }
  };

  const providerValue = useMemo(() => ({
    players,
    loading,
    error,
    search,
    loadMorePlayers,
    hasMore
  }), [players, loading, error, search, loadMorePlayers, hasMore]);

  return (
    <PlayersContext.Provider value={{ ...providerValue, setSearch }}>
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersContext;
