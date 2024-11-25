import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ display: "inline-block", margin: "5px 5px" }}
    >
      {text}
    </button>
  );
};

const AnecdoteDisplay = ({ anecdotes, selected, votes }) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
    </>
  );
};

const MostPopularAnecdoteDisplay = ({
  anecdotes,
  mostVotes,
  mostVotedIndex,
}) => {
  return (
    <div>
      <h1>Anecdotes with most votes</h1>
      {mostVotes > 0 ? (
        <>
          <div>{anecdotes[mostVotedIndex]}</div>
          <p>has {mostVotes} votes</p>
        </>
      ) : (
        <div>No votes yet</div>
      )}
    </div>
  );
};

const App = () => {
  // variables
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const points = new Array(anecdotes.length).fill(0);

  // states
  const [votes, setVotes] = useState([...points]);
  const [selected, setSelected] = useState(0);

  // functions
  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const mostVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(mostVotes);

  return (
    <>
      <AnecdoteDisplay
        anecdotes={anecdotes}
        selected={selected}
        votes={votes}
      />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="next anecdote" />
      <MostPopularAnecdoteDisplay
        anecdotes={anecdotes}
        mostVotes={mostVotes}
        mostVotedIndex={mostVotedIndex}
      />
    </>
  );
};

export default App;
