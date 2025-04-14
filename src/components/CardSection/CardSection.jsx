const apiKey = 'aba4b16f';

import './CardSection.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';

function CardSection({
  headingText,
  from,
  landingMovies,
  searchedMovie,
  favorites,
  setFavorites,
}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (from === 'landing') {
      setMovies(landingMovies);
      setIsLoading(false);
    }
  }, [landingMovies]);

  useEffect(() => {
    if (from === 'search') {
      axios
        .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchedMovie}`)
        .then((response) => {
          if (response.data.Search?.length > 0) {
            setMovies(response.data.Search);
          } else {
            setMovies([]);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(`An error occurred: ${error.message}`);
          setIsLoading(false);
        });
    }
  }, [searchedMovie]);

  useEffect(() => {
    if (from === 'watchlist') {
      console.log('from watchlist');
      setIsLoading(false);
    }
  }, [favorites]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className='card-section'>
      <Heading headingText={headingText} />
      <CardList
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </section>
  );
}

export default CardSection;
