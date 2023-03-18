import React from 'react';

const SearchBar = (props) => {
  const { searchGifs } = props;
  const handleChange = (event) => {
    searchGifs(event.currentTarget.value);
  };
  return (
    <div>
      <input type="text" className="form-search form-control" onChange={handleChange}/>
    </div>
  );
};

export default SearchBar;
