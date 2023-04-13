import React, {useState} from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import Add from './Add.jsx'

const App = (props) => {
  const movies = [
    {title: 'Mean Girls', watched: false},
    {title: 'Hackers', watched: false},
    {title: 'The Grey', watched: false},
    {title: 'Sunshine', watched: false},
    {title: 'Ex Machina', watched: false},
  ];
  const [movieList, setMovieList] = useState(movies)
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
        var newWatchStatusMovie = {title: movie.title, watched: !movie.watched}
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