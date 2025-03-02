// src/App.js

import React, { useReducer } from 'react';
import { initialState, formReducer } from './formReducer';
import './App.css'; // Optional: You can add styles here

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here if needed
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="App">
      <h1>Email and Password Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={state.password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {state.email === '' && state.password === '' ? (
        <div>No details found</div>
      ) : (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      )}
    </div>
  );
};

export default App;