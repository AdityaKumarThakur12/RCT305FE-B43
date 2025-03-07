import React from "react";
import useToggle from "./useToggle";

function App() {
  const [state, toggleState] = useToggle(["A", "B", "C"], 1);

  return (
    <div>
      <h1>Current State: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
