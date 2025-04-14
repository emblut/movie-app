import React, { useState, useEffect } from 'react';
import { useFavorites } from '../../context/favoritesContext';

function WatchlistButton({ movie }) {
  const { favorites, addFavorites, removeFavorites }  = useFavorites()

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
    
      }}
    >
      Lägg till
    </button>
  );
}

export default WatchlistButton;
