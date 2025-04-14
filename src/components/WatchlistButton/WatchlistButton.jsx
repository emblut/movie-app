import React, { useState, useEffect } from 'react';

function WatchlistButton({ movie, favorites, setFavorites }) {
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
