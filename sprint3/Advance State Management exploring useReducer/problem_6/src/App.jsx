import React, { useReducer } from 'react';
import { initialState, themeReducer } from './themeReducer';
import './App.css'; 

const App = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className={state.theme}>
      <h1>Current Theme: {state.theme}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;