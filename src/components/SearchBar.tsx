import { usePlayers } from '../context/PlayersContext';

const SearchBar = () => {
  const { search, setSearch } = usePlayers();

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
