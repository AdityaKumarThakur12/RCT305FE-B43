import React from 'react';

const DataList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default DataList;
