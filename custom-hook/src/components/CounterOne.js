import React from 'react';
import useCounter from '../Hooks/useCounter';

function CounterOne() {
  const [count,increment,decrement,reset] = useCounter(0,3);

  return (
    <div>
      <div>Count = {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;