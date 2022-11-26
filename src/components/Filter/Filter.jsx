import React from 'react';

const Filter = ({ query, onChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <input type="text" value={query} onChange={onChange} />
    </label>
  );
};

export default Filter;
