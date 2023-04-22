import MovieListEntry from './MovieListEntry.jsx'
import React, {useState} from 'react';

const MovieList = (props) => {
  var searchMovies = []
  if (props.search === '' && props.watchStatus === '') {
    console.log('this is what MovieList sees in props', props)
    searchMovies = props.movies;
  } else {
    props.movies.forEach((movie) => {
      if (movie.movie.includes(props.search) && movie.watched === props.watchStatus) {
        searchMovies.push(movie)
      }
    })
  }
  if (searchMovies.length === 0) {
    searchMovies.push({movie: 'No Movies Found containing ' + props.search, watched: 'No movies found with watch status ' + props.watchStatus})
  }
  return (
    <ul>
      {searchMovies.map((movie) =>
        <MovieListEntry key={movie.movie} movie={movie} handleWatchedClick={props.handleWatchedClick} />
      )}
    </ul>

  );
};

export default MovieList;