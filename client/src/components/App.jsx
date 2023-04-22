import React, {useState} from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import Add from './Add.jsx'
import axios from 'axios';

const App = (props) => {

  const [movieList, setMovieList] = useState([])
  const [filterText, setFilterText] = useState('')
  const [search, setSearch] = useState('')
  const [addText, setAddText] = useState('')
  const [watchStatus, setWatchStatus] = useState('')


  const handleSearch = function(e) {
    setFilterText(e.target.value)
  };

  const handleSearchSubmit = function() {
    setSearch(filterText)
    setFilterText('')
    axios.get('http://localhost:3000/api/movies')
    .then((results) => {
      console.log('these are the results', results.data);
      setMovieList(results.data);
      console.log('this is the movieList', movieList)
    });
  }

  const handleAdd = function(e) {
    setAddText(e.target.value)
  }

  const handleAddSubmit = function() {
    if(addText !== '') {
      var newMovieArray = []
      movieList.forEach((movie) => newMovieArray.push(movie))
      newMovieArray.push({title: addText, watched: false})
      setMovieList(newMovieArray)
      setAddText('')
    }
  }

  const handleWatchedClick = function(targetMovie) {
    var newMovieArray = []
    movieList.forEach((movie) => {
      if(movie === targetMovie) {
        var newWatchStatusMovie = {movie: movie.movie, watched: !movie.watched}
        newMovieArray.push(newWatchStatusMovie)
      } else {
        newMovieArray.push(movie)
      }
    })
    setMovieList(newMovieArray)
  }

  const handleWatchClicks = function(bool) {
    if (bool === watchStatus) {
      setWatchStatus('')
    } else {setWatchStatus(bool)}
  }

  return (
    <div><h1>MovieList</h1>
    <Add addText={addText} handleAdd={handleAdd} handleAddSubmit={handleAddSubmit}/>
    <Search filterText ={filterText} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit}/>
    <button onClick={() => handleWatchClicks(true)}>Watched</button>
    <button onClick={() => handleWatchClicks(false)}>To Watch</button>
    <MovieList movies={movieList} search={search} handleWatchedClick={handleWatchedClick} watchStatus={watchStatus}/></div>
  );
};

export default App;