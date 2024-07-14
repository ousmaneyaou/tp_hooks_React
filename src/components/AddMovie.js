import React, { useState } from 'react';
import '../css/AddMovie.css';

const AddMovie = ({ onAdd }) => {
  // État local pour gérer les valeurs du formulaire
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rating: '',
    trailerUrl: '', // Ajouter le champ trailerUrl
  });

  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...movie, id: Date.now() }); // Ajouter un film avec un ID unique
    // Réinitialiser le formulaire après soumission
    setMovie({
      title: '',
      description: '',
      posterUrl: '',
      rating: '',
      trailerUrl: '', // Réinitialiser le champ trailerUrl
    });
  };

  return (
    <div className="technoadd">
      <h1 className='titre'>Add a Movie</h1>
      <form className="styledform" onSubmit={handleSubmit}>
        <label htmlFor="posterUrl">Poster URL:</label><br />
        <input
          type="file"
          name="posterUrl"
          id="posterUrl"
          value={movie.posterUrl}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="title">Title:</label><br />
        <input
          type="text"
          name="title"
          id="title"
          value={movie.title}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          value={movie.description}
          onChange={handleChange}
          required
        ></textarea><br />

        <label htmlFor="rating">Rating:</label><br />
        <input
          type="number"
          name="rating"
          id="rating"
          value={movie.rating}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="trailerUrl">Trailer URL:</label><br />  {/* Ajouter le champ trailerUrl */}
        <input
          type="text"
          name="trailerUrl"
          id="trailerUrl"
          value={movie.trailerUrl}
          onChange={handleChange}
          required
        /><br />

        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
};

export default AddMovie;
