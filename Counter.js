import React, { useState, useReducer } from "react";

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload = 0);
    default:
      return state;
  }
}
function Counter({ initialCount }) {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      count : {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
export default Counter;