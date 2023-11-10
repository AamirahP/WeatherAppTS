import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  function search() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="topBar">
      <input type="text" className="cityInput" placeholder="Search" />

      <AiOutlineSearch size="20" onClick={search()} />
    </div>
  );
};

export default SearchBar;
