const ListOfCountries = ({ countries, setShowCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca2}>
          {country.name.common}
          <button onClick={() => setShowCountry(country)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default ListOfCountries;
