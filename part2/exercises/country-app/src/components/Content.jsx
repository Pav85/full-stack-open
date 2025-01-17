import Country from "./Country";
import ListOfCountries from "./ListOfCountries";

const Content = ({ countries }) => {
  return (
    <div>
      {countries.length > 1 && <ListOfCountries countries={countries} />}{" "}
      {countries.length === 1 && <Country country={countries[0]} />}
    </div>
  );
};

export default Content;
