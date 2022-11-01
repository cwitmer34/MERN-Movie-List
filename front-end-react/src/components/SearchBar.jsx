import search from "../assets/images/search.png";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input  
          className="search-input"
          type="text"
          placeholder="Search for a title..."
        />
        <img className="search-icon" src={search} alt="search icon" />
      </div>
    </div>
  );
};

export default SearchBar;
