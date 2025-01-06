const Persons = ({ persons, filter, filteredPersons }) => {
  return (
    <>
      <ul>
        {" "}
        {(filter ? filteredPersons : persons).map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
