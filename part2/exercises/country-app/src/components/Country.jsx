import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      {"   "}
      <div>Capital: {country.capital[0]}</div>
      <div>Area: {country.area} km2</div>

      <h3>Languages: </h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        height="120"
      />

      <Weather country={country} />
    </div>
  );
};

export default Country;
