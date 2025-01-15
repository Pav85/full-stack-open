import Search from "./components/Search";
import Message from "./components/Message";

const App = () => {
  const handleSearchCountry = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>Country App</h1>
      <Search handleSearchCountry={handleSearchCountry} />
      <Message />
    </div>
  );
};

export default App;
