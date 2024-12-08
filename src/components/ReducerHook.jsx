import React, { useReducer } from "react";

const ReducerHook = () => {
  // initial states
  const initialState = { count: 0, showCountFlag: true };

  // reducer function recieve action and make change in current state according to action received
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count++ };

      case "dec":
        return { ...state, count: state.count-- };

      case "reset":
        return { ...state, count: 0 };

      case "showCount":
        return { ...state, showCountFlag: !state.showCountFlag };
    }
  };

  const [state, dispatch] = useReducer(reducerFun, initialState);

  return (
    <div>
      {state.showCountFlag && <div>count:{state?.count}</div>}
      <div>
        <button onClick={() => dispatch({ type: "showCount" })}>
          show count?
        </button>
        <button onClick={() => dispatch({ type: "inc" })}>inc count</button>
        <button onClick={() => dispatch({ type: "dec" })}>dec count</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset count</button>
      </div>
    </div>
  );
};

export default ReducerHook;
