import { useGlobalPlayersContext } from '../hooks';
import { TextInputProps } from '../types/types';

const TextInput: React.FC<TextInputProps> = () => {
  const { search, setSearch } = useGlobalPlayersContext();

  return (
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default TextInput;