import React, { useReducer, useState } from 'react';

const initialState = {
  username: '',
  password: '',
};

const actionTypes = {
  SET_FIELD: 'SET_FIELD',
  RESET: 'RESET',
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_FIELD:
      return { ...state, [action.field]: action.value };
    case actionTypes.RESET:
      return initialState;
    default:
      throw new Error('invalid action type');
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: actionTypes.SET_FIELD, field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login data:', state);
  };

  const handleReset = () => {
    dispatch({ type: actionTypes.RESET });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label>Username: </label>
        <input type="text" name="username" value={state.username} onChange={handleChange} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password" value={state.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Login;
