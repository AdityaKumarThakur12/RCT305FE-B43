import React, { useReducer } from 'react';
import { initialState, visibilityReducer } from './visibiltyReducer';
import './App.css'; 

const App = () => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  const toggleVisibility = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  return (
    <div className="App">
      <button onClick={toggleVisibility}>
        Toggle Message
      </button>
      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default App;