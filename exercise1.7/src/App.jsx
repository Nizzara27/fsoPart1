import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    const updatedAverage = average + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);

    setAverage(updatedAverage);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    const updatedAverage = average - 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    setAverage(updatedAverage);
  };

  return (
    <div>
      <h2> give feedback </h2>

      <button onClick={handleGoodClick}>good</button>

      <button onClick={handleNeutralClick}>neutral</button>

      <button onClick={handleBadClick}>bad</button>

      <h2> statistics </h2>
      <p> good {good} </p>
      <p> neutral {neutral} </p>
      <p> bad {bad} </p>
      <p> all {total} </p>
      <p> average {average / total}</p>
      <p> positive {(good / total) * 100}%</p>
    </div>
  );
};

export default App;
