import Country from "./Country";
import ListOfCountries from "./ListOfCountries";

const Content = ({ countries, showCountry, setShowCountry }) => {
  return (
    <div>
      {showCountry && <Country country={showCountry} />}
      {!showCountry && countries.length > 1 && (
        <ListOfCountries
          countries={countries}
          setShowCountry={setShowCountry}
        />
      )}
      {!showCountry && countries.length === 1 && (
        <Country country={countries[0]} />
      )}
    </div>
  );
};

export default Content;
