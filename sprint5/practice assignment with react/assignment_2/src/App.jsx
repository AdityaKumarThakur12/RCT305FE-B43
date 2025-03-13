import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from './redux/thunk';
import SearchBar from './searchBar';
import DataList from './dataList';
const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error, searchQuery } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>API Data Fetcher</h1>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <DataList data={filteredData} />
    </div>
  );
};

export default App;
