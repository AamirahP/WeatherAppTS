import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  search: () => void;
}

const SearchBar = ({ search }: Props) => {
  return (
    <div className="topBar">
      <input type="text" className="cityInput" placeholder="Search" />

      <AiOutlineSearch className="searchIcon" size="20" onClick={search} />
    </div>
  );
};

export default SearchBar;
