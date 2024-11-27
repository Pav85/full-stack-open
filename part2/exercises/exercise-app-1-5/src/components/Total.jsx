const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => {
    console.log("what is happening", acc, part);
    return acc + part.exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
};

export default Total;
