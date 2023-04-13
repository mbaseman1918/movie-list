import React,{useState} from 'react';

const Search = (props) => {

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.handleSearchSubmit()
      }}>
      <input type="text" value={props.filterText} placeholder="Search..." onChange={(e) => props.handleSearch(e)}/>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default Search;