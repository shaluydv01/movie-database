// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.Runtime}</p>
    </div>
  );
};

export default MovieCard;
