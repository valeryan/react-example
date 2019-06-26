import React, {useState} from 'react';

function Button({onClickFunction, increment}) {
  const handleClick = () => onClickFunction(increment);
  return (
    <button onClick={handleClick}>
      + {increment}
    </button>
  );
}

function Display({message}) {
  return (
  <div>{message}</div>
  );
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Display message={counter} />
    </div>
  );
}
