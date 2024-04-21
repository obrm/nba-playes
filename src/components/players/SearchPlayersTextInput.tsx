import { useGlobalPlayersContext } from '../../hooks';
import { ITextInputProps } from '../../types/interfaces';

const SearchPlayersTextInput: React.FC<ITextInputProps> = () => {
  const { search, setSearch } = useGlobalPlayersContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered"
      value={search}
      onChange={handleChange}
    />
  );
};

export default SearchPlayersTextInput;