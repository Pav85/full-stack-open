import { useState } from "react";
import Search from "./components/Search";
import Content from "./components/Content";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [message, setMessage] = useState(null);

  const handleSearchCountry = (event) => {
    const searchValue = event.target.value;
    setSearchCountry(searchValue);
  };

  return (
    <div>
      <h1>Country App</h1>
      <Search handleSearchCountry={handleSearchCountry} />

      <Content
        countries={countries}
        searchCountry={searchCountry}
        setCountries={setCountries}
        setMessage={setMessage}
      />
    </div>
  );
};

export default App;
