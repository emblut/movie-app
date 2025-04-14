import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../../components/Carousel/Carousel';

import CardSection from '../../components/CardSection/CardSection';

function LandingPage({ favorites, setFavorites }) {
  const [landingMovies, setLandingMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headingText = 'Recommendations';
  const from = 'landing';

  useEffect(() => {
    axios
      .get('https://santosnr6.github.io/Data/favoritemovies.json')
      .then((response) => {
        setLandingMovies(response.data);
      })
      .catch((error) => {
        console.error('An error occurred: ', error);
      });
  }, []);

  useEffect(() => {
    if (landingMovies.length > 0) {
      setRandomMovies(getRandomMovies(5, landingMovies));
      setIsLoading(false);
    }
  }, [landingMovies]);

  function getRandomMovies(amount, landingMovies) {
    const randomMovies = [];
    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(Math.random() * landingMovies.length);
      randomMovies.push(landingMovies[randomIndex]);
    }
    return randomMovies;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Carousel randomMovies={randomMovies} />
      <CardSection
        headingText={headingText}
        from={from}
        landingMovies={landingMovies}
        searchedMovie={null}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default LandingPage;
