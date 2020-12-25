import React from 'react';

export const CounterOne = (props) => {
  const { onIncrement, onDecrement, onIncrementNum, value } = props;

  return (
      <div className="App">
        <h1>Counter: {value}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={() => onIncrementNum(3)}>Increment by 3</button>
      </div>
  );
};
