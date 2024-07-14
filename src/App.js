import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import Home from './components/Home';
import Menue from './components/Menue';
import MovieDetails from './components/moviedetails';
import './css/app.css';
import nameImage from './images/sarraounia.jpg';
import nameexclavage from './images/exclavage.jpg';
import nameshaka from './images/shaka zulu.jpg';
import nametirailleur from './images/tirailleur.jpg';
import nameteranga from './images/teranga.jpg';
import namethiaroye from './images/thiaroye.jpg';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'sarraounia',
      description: 'Sarraounia Mangou, une reine guerrière et chef de village africaine dans la région de Niger au début du 20e siècle.',
      posterUrl: nameImage,
      rating: 9.8,
      trailerUrl: 'https://www.youtube.com/embed/hcRDeyf7V4E',
    },
    {
      id: 2,
      title: 'exclavage',
      description: 'A journey through space and time.',
      posterUrl: nameexclavage,
      rating: 8.6,
      trailerUrl: 'https://www.youtube.com/embed/hE_knUa-5lM',
    },
    {
      id: 3,
      title: 'shaka zulu',
      description: 'Elle retrace la vie du célèbre roi zoulou Shaka kaSenzangakhona. La série met en lumière la montée de Shaka au pouvoir, sa transformation de chef de clan en un leader militaire redoutable et la création de l"empire zoulou.',
      posterUrl: nameshaka,
      rating: 8.4,
      trailerUrl: 'https://www.youtube.com/embed/4SNThp0YiU4',
    },
    {
      id: 4,
      title: 'tirailleur',
      description: 'Le film Tirailleurs du Franco-sénégalais Omar Sy revient sur l"histoire du corps des tirailleurs sénégalais durant la Grande Guerre (1914-1918).',
      posterUrl: nametirailleur,
      rating: 9.2,
      trailerUrl: 'https://www.youtube.com/embed/WWkcOHtTmcA',
    },
    {
      id: 5,
      title: 'teranga',
      description: 'Pays de l"hospitalité et la générosité envers les visiteurs.',
      posterUrl: nameteranga,
      rating: 7.6,
      trailerUrl: 'https://www.youtube.com/embed/d9BNrV2BTyk',
    },
    {
      id: 6,
      title: 'thiaroye',
      description: 'le massacre de soldats sénégalais par l"armée française à Thiaroye, près de Dakar, en 1944.',
      posterUrl: namethiaroye,
      rating: 8.8,
      trailerUrl: 'https://www.youtube.com/embed/8DXxnNom2-s',
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleEditMovie = (updatedMovie) => {
    const editedMovies = movies.map(movie =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setMovies(editedMovies);
    setFilteredMovies(editedMovies);
  };

  const handleDeleteMovie = (id) => {
    const remainingMovies = movies.filter(movie => movie.id !== id);
    setMovies(remainingMovies);
    setFilteredMovies(remainingMovies);
  };

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else if (filterType === 'rating') {
      const filtered = movies.filter(movie => movie.rating >= parseFloat(value));
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className="app">
      <Menue />
      <Filter handleFilterChange={handleFilterChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie onAdd={handleAddMovie} />} />
        <Route path="/list-movie" element={<MovieList movies={filteredMovies} onEdit={handleEditMovie} onDelete={handleDeleteMovie} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={filteredMovies} />} />
      </Routes>
    </div>
  );
};

export default App;
