const apiKey = 'aba4b16f';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardSection from '../../components/CardSection/CardSection';

function SearchPage({ favorites, setFavorites }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const headingText = 'Results';
  const { searchedMovie } = useParams();

  useEffect(() => {
    setSearchMovies([]);
    axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchedMovie}`)
      .then((response) => {
        if (response.data.Search?.length > 0) {
          setSearchMovies(response.data.Search);
        } else {
          setSearchMovies([]);
        }
      })
      .catch((error) => {
        console.error(`An error occurred: ${error.message}`);
      });
  }, [searchedMovie]);

  return (
    <>
      <CardSection
        headingText={headingText}
        movies={searchMovies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default SearchPage;
