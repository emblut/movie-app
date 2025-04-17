import React from 'react';
import { useFavorites } from '../../context/favoritesContext';
import './WatchlistButton.css'; 

function WatchlistButton({ movie, className = '' }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  
  const isFavorite = favorites.some(fav => fav && fav.imdbID === movie.imdbID);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    if (isFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button className={`favorite-button ${className}`} onClick={handleFavoriteClick} aria-label='Favorite button'>
      {isFavorite ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
    </button>
  );
}

export default WatchlistButton;
