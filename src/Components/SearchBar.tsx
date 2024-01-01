import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  search: () => void;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ search, city, setCity }: Props) => {
  const handleSearchClick = () => {
    search(); // Trigger search when search icon is clicked
  };
  return (
    <div className="topBar">
      <input
        type="text"
        className="cityInput"
        placeholder="Search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <AiOutlineSearch
        className="searchIcon"
        size="20"
        onClick={handleSearchClick}
      />
    </div>
  );
};

export default SearchBar;
