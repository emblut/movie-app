import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../components/Carousel/Carousel";
import CardSection from "../../components/CardSection/CardSection";

function LandingPage({ favorites, setFavorites }) {
  const [landingMovies, setLandingMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const headingText = "Recommendations";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://santosnr6.github.io/Data/favoritemovies.json"
        );
        setLandingMovies(response.data);
      } catch (err) {
        setError("Kunde inte ladda rekommendationerna.");
        console.error("Fel vid hämtning:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (landingMovies.length > 0) {
      setRandomMovies(getRandomMovies(5, landingMovies));
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
