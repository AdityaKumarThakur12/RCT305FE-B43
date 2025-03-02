import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const initialState = {
  query: '',
  results: [],
  loading: false,
  error: '',
};

const actionTypes = {
  SET_QUERY: 'SET_QUERY',
  SET_RESULTS: 'SET_RESULTS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_QUERY:
      return { ...state, query: action.value };
    case actionTypes.SET_RESULTS:
      return { ...state, results: action.value, loading: false, error: '' };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.value };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.value, loading: false };
    default:
      throw new Error('invalid action type');
  }
}

function SearchCountries() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCountries = debounce(async (query) => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, value: true });
      const response = await axios.get(`https://api.first.org/data/v1/countries?q=${query}`);
      dispatch({ type: actionTypes.SET_RESULTS, value: response.data.data });
    } catch (error) {
      dispatch({ type: actionTypes.SET_ERROR, value: error.message });
    }
  }, 300);

  useEffect(() => {
    if (state.query) {
      fetchCountries(state.query);
    }
  }, [state.query]);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: actionTypes.SET_QUERY, value });
  };

  return (
    <div>
      <input type="text" value={state.query} onChange={handleChange} placeholder="Search for countries" />
      {state.loading && <div>Loading...</div>}
      {state.error && <div style={{ color: 'red' }}>{state.error}</div>}
      <ul>
        {Object.values(state.results).map(country => (
          <li key={country.code}>{country.country}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchCountries;
