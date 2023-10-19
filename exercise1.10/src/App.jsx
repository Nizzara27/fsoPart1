import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const Statistics = (props) => {
  if (props.allStatistics.length === 0) {
    return <div>No feedBack given</div>;
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={props.average / props.total} />
      <StatisticLine
        text="positive"
        value={(props.good / props.total) * 100 + ' %'}
      />
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

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

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
