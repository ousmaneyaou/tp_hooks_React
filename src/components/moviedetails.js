import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/Moviedetail.css';


const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => navigate('/list-movie')}>Retour</button>
    </div>
  );
};

export default MovieDetails;
