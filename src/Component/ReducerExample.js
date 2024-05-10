import React, { useReducer } from "react";
import './ReducerExampleStyles.css'
// useReducer(reducer,initialState)
// reducer(currentState,action)

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Current count is: {count}</h1>
      
      <div className="arrangeButtons"> 
      <button onClick={() => dispatch("increment")}>Increment</button>
      
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      
      <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
};

export default ReducerExample;
