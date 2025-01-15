const Search = ({ handleSearchCountry }) => {
  return (
    <div>
      search countries <input onChange={handleSearchCountry} />
    </div>
  );
};

export default Search;
