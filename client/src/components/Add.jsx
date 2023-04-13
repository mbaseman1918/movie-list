import React, {useState} from 'react';

const Add = (props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleAddSubmit()
    }}>
      <input type="text" value={props.addText} placeholder="Add Movie" onChange={(e) => props.handleAdd(e)}/>
      <input type="submit" value="Add"/>
    </form>
  )
}

export default Add;