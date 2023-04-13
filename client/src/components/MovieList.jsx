import MovieListEntry from './MovieListEntry.jsx'
import React, {useState} from 'react';

const MovieList = (props) => {
  var searchMovies = []
  if (props.search === '' && props.watchStatus === '') {
    searchMovies = props.movies;
  } else {
    props.movies.forEach((movie) => {
      if (movie.title.includes(props.search) && movie.watched === props.watchStatus) {
        searchMovies.push(movie)
      }
    })
  }
  if (searchMovies.length === 0) {
    searchMovies.push({title: 'No Movies Found containing ' + props.search, watched: 'No movies found with watch status ' + props.watchStatus})
  }
  return (
    <ul>
      {searchMovies.map((movie) =>
        <MovieListEntry key={movie.title} movie={movie} handleWatchedClick={props.handleWatchedClick} />
      )}
    </ul>

  );
};

export default MovieList;