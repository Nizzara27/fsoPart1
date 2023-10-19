import { useState } from 'react';

// a proper place to define a component
const Statistics = (props) => {
  if (props.allStatistics.length === 0) {
    return <div>No feedBack given</div>;
  }
  return (
    <div>
      <p> good {props.good} </p>
      <p> neutral {props.neutral} </p>
      <p> bad {props.bad} </p>
      <p> all {props.total} </p>
      <p> average {props.average / props.total}</p>
      <p> positive {(props.good / props.total) * 100}%</p>
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [allStatistics, setAll] = useState([]);

  const handleGoodClick = () => {
    setAll(allStatistics.concat('G'));
    const updatedGood = good + 1;
    const updatedAverage = average + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);

    setAverage(updatedAverage);
  };

  const handleNeutralClick = () => {
    setAll(allStatistics.concat('N'));
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
  };

  const handleBadClick = () => {
    setAll(allStatistics.concat('B'));
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
      <Statistics
        allStatistics={allStatistics}
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
      />
    </div>
  );
};

export default App;
