const Search = ({ handleSearchCountry }) => {
  return (
    <div>
      Search countries <input onChange={handleSearchCountry} />
    </div>
  );
};

export default Search;
