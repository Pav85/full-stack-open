import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    personsService.getAll().then((personsData) => {
      setPersons(personsData);
      setFilteredPersons(personsData);
    });
  }, []);

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

    personsService.create(personObject).then((response) => {
      const updatedPersons = persons.concat(response);
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleDeleteName = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}?`);

    if (!confirmDelete) {
      return;
    }

    personsService.remove(id).then(() => {
      const updatedPersons = persons.filter((person) => person.id !== id);
      setPersons(updatedPersons);
      setFilteredPersons(updatedPersons);
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);

    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    setFilteredPersons(filtered);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilterChange={handleFilterChange} filter={filter} />

      <h2>Add a new</h2>

      <PersonForm
        handleAddName={handleAddName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons
        filter={filter}
        filteredPersons={filteredPersons}
        persons={persons}
        handleDeleteName={handleDeleteName}
      />
    </div>
  );
};

export default App;
