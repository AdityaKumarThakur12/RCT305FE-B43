
import React, { useReducer } from 'react';

const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: {name: '', locality: { pinCode: '', landmark: '' }},
    state: '',
    coordinates: { latitude: '', longitude: '' },
  },
  courses_offered: []
};

const actionTypes = {
  SET_FIELD: 'SET_FIELD',
  RESET: 'RESET',
  INVALID: 'INVALID'
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_FIELD:
      return { ...state, ...action.payload };
    case actionTypes.RESET:
      return initialState;
    default:
      throw new Error('invalid action type');
  }
}

function CollegeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: actionTypes.SET_FIELD, payload: { [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', state);
    // You can display form data below or handle as required
  };

  const handleReset = () => {
    dispatch({ type: actionTypes.RESET });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>College Name: </label>
        <input type="text" name="name" value={state.name} onChange={handleChange} />
      </div>
      <div>
        <label>Establishment Year: </label>
        <input type="text" name="establishment_year" value={state.establishment_year} onChange={handleChange} />
      </div>
      <div>
        <label>Building: </label>
        <input type="text" name="building" value={state.address.building} onChange={handleChange} />
      </div>
      <div>
        <label>Street: </label>
        <input type="text" name="street" value={state.address.street} onChange={handleChange} />
      </div>
      <div>
        <label>City: </label>
        <input type="text" name="city" value={state.address.city.name} onChange={handleChange} />
      </div>
      <div>
        <label>State: </label>
        <input type="text" name="state" value={state.address.state} onChange={handleChange} />
      </div>
      <div>
        <label>PinCode: </label>
        <input type="text" name="pinCode" value={state.address.city.locality.pinCode} onChange={handleChange} />
      </div>
      <div>
        <label>Landmark: </label>
        <input type="text" name="landmark" value={state.address.city.locality.landmark} onChange={handleChange} />
      </div>
      <div>
        <label>Latitude: </label>
        <input type="text" name="latitude" value={state.address.coordinates.latitude} onChange={handleChange} />
      </div>
      <div>
        <label>Longitude: </label>
        <input type="text" name="longitude" value={state.address.coordinates.longitude} onChange={handleChange} />
      </div>
      <div>
        <label>Courses Offered: </label>
        <textarea name="courses_offered" value={state.courses_offered} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default CollegeForm;
