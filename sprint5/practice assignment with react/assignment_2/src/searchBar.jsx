import React from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from './redux//actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchData(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
