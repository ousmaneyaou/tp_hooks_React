import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css';


// Composant MovieCard qui prend les props id, title, description, posterUrl, rating, onEdit, onDelete et onAdd
const MovieCard = ({ id, title, description, posterUrl, rating, onEdit, onDelete }) => {
  return (
    
    <div className="movie-card">
      {/* Affichage de l'image du film */}
      <Link to={`/movie/${id}`}>
        <img src={posterUrl} alt={title} />
        <h3>{title}</h3>
      </Link>
      {/* <img src={posterUrl} alt={title} /> */}
      {/* Affichage du titre du film */}
      {/* <h3>{title}</h3> */}
      {/* Affichage de la description du film */}
      <p>{description}</p>
      {/* Affichage de la note du film */}
      <p>Rating: {rating}</p>
      {/* Bouton pour éditer le film */}
      <button className="edit-button" onClick={() => onEdit(id)}>Edit</button>
      {/* Bouton pour supprimer le film */}
      <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
      
    </div>
  );
};

export default MovieCard;
