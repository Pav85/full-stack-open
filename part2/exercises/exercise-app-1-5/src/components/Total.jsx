const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>Number of exercises {total}</p>;
};

export default Total;
