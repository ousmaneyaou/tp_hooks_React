import React from 'react';
import MovieCard from './MovieCard';
import '../css/MovieList.css'; 

const MovieList = ({ movies, onEdit, onDelete }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        
        <MovieCard
          key={movie.id} // Assumer que chaque film a un identifiant unique
          id={movie.id}
          title={movie.title}
          description={movie.description}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
          onEdit={onEdit}
          onDelete={onDelete}
        />
        
      ))}
    </div>
  );
};

export default MovieList;
