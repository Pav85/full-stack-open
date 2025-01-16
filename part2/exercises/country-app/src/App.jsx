import { useState } from "react";
import Search from "./components/Search";
import Message from "./components/Message";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [message, setMessage] = useState(null);

  const handleSearchCountry = (event) => {
    console.log(event.target.value);
    const searchValue = event.target.value;
    setSearchCountry(searchValue);
  };

  return (
    <div>
      <h1>Country App</h1>
      <Search handleSearchCountry={handleSearchCountry} />
      <Message message={message} />
    </div>
  );
};

export default App;
