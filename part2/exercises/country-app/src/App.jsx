import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Content from "./components/Content";
import Message from "./components/Message";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [message, setMessage] = useState(null);
  const [showCountry, setShowCountry] = useState(null);

  useEffect(() => {
    if (searchCountry) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchCountry}`)
        .then((response) => {
          const countriesData = response.data;

          if (countriesData.length > 10) {
            setMessage("Too many matches, specify another filter.");
            setCountries([]);
          } else {
            setCountries(countriesData);
            setMessage(null);
          }
        })
        .catch(() => {
          setCountries([]);
          setMessage("Country not found.");
        });
    } else {
      setCountries([]);
      setMessage(null);
    }
  }, [searchCountry]);

  const handleSearchCountry = (event) => {
    const searchValue = event.target.value;
    setSearchCountry(searchValue);
    setShowCountry(null);
  };

  return (
    <div>
      <h1>Country App</h1>
      <Search handleSearchCountry={handleSearchCountry} />
      {message && <Message message={message} />}
      <Content
        countries={countries}
        showCountry={showCountry}
        setShowCountry={setShowCountry}
      />
    </div>
  );
};

export default App;
