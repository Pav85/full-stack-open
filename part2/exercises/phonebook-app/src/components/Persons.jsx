const Persons = ({ persons, filter, filteredPersons, handleDeleteName }) => {
  return (
    <>
      <ul>
        {" "}
        {(filter ? filteredPersons : persons).map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDeleteName(person.id, person.name)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
