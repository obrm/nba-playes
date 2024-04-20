import { useGlobalPlayersContext } from '../../hooks';
import { TextInputProps } from '../../types/types';

const TextInput: React.FC<TextInputProps> = () => {
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

export default TextInput;