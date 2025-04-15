import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../components/Carousel/Carousel";

import CardSection from "../../components/CardSection/CardSection";

function LandingPage({ favorites, setFavorites }) {
  const [landingMovies, setLandingMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);
  const headingText = "Recommendations";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const headingText = "Recommendations";

  useEffect(() => {
    axios
      .get("https://santosnr6.github.io/Data/favoritemovies.json")
      .then((response) => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://santosnr6.github.io/Data/favoritemovies.json"
        );
        setLandingMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("An error occurred: ", error);
      });
  }, []);

  function getRandomMovies(amount, landingMovies) {
    const randomMovies = [];
    for (let i = 0; i < amount; i++) {
      const randomIndex = Math.floor(Math.random() * landingMovies.length);
      randomMovies.push(landingMovies[randomIndex]);
    }
    return randomMovies;
  }
  console.log(randomMovies )

  useEffect(() => {
    if (landingMovies.length > 0) {
      setRandomMovies(getRandomMovies(5, landingMovies));
    }
  }, [landingMovies]);

  
  

  if (isLoading) return <p>Laddar rekommendationer...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (landingMovies.length === 0) return <p>Inga filmer hittades.</p>;

  return (
    <>
      <Carousel randomMovies={randomMovies} />

      <CardSection
        headingText={headingText}
        movies={landingMovies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default LandingPage;
