import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './redux/action'; 

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
      <button onClick={() => dispatch(setFilter('COMPLETED'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('PENDING'))}>Pending</button>
    </div>
  );
};

export default Filter;
