// src/App.js
import './index.css';
import React from 'react';
import MovieList from './components/movieList';



function App() {
  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieList />
    </div>
  );
}

export default App;
