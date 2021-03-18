import React, { useReducer } from "react";

const intitialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intitialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, intitialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, intitialState);
  return (
    <div>
      <div>Count = > {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>
        <div> Count Two => {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment two</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement two</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
