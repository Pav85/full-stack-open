import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (all ? (good - bad) / all : 0).toFixed(2);
  const positivePercentage = ((good / all) * 100).toFixed(2);

  // event handlers
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // components
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  const Feedback = ({
    handleGoodClick,
    handleNeutralClick,
    handleBadClick,
  }) => {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
      </div>
    );
  };

  const Statistics = ({
    good,
    neutral,
    bad,
    all,
    average,
    positivePercentage,
  }) => {
    if (!good && !neutral && !bad) {
      return (
        <div>
          <h2>statistics</h2>
          <p>No feedback given</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>statistics</h2>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positivePercentage}%</p>
        </div>
      );
    }
  };

  return (
    <>
      <Feedback
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positivePercentage={positivePercentage}
      />
    </>
  );
};

export default App;
