
import React from 'react';
import { useFavorites } from '../../context/favoritesContext';

function WatchlistButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  
  const isFavorite = movie ? favorites.some(fav => fav && fav.imdbID === movie.imdbID) : false;

  const handleFavoriteClick = (event) => {
    event.preventDefault(); 
    
    if (isFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button className="favorite-btn" onClick={handleFavoriteClick}>
      {isFavorite ? 'Ta bort favorit' : 'Lägg till favorit'}
    </button>
  );
}

export default WatchlistButton;
