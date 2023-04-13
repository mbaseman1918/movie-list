import React, {useState} from 'react';

const MovieListEntry = (props) => {
  return (
    <li>{props.movie.title}
    <button onClick={(e) => {
      console.log(props.movie)
      props.handleWatchedClick(props.movie)
    }}>Watched: {props.movie.watched.toString()}</button></li>
  )
}

export default MovieListEntry;