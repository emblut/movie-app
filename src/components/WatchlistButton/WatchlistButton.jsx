
import React from 'react';
import { useFavorites } from '../../context/favoritesContext';

function WatchlistButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  
  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

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
