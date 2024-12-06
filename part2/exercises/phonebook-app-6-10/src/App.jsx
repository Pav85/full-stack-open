import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const capitalizeFirstLetter = (name) => {
    return name
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const handleAddName = (event) => {
    event.preventDefault();

    const trimmedName = newName.trim();
    const trimmedNumber = newNumber.trim();
    const capitalizedName = capitalizeFirstLetter(trimmedName);

    if (!trimmedName || !trimmedNumber) {
      return;
    }

    if (persons.some((person) => person.name === capitalizedName)) {
      alert(`${capitalizedName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: capitalizedName,
      number: trimmedNumber,
    };

    const updatedPersons = persons.concat(personObject);
    setPersons(updatedPersons);
    setFilteredPersons(updatedPersons);
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);

    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredPersons(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilterChange} value={filter} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          number: <input type="number" onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {(filter ? filteredPersons : persons).map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
