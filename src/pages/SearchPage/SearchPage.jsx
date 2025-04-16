const apiKey = "aba4b16f";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardSection from "../../components/CardSection/CardSection";

function SearchPage({ favorites, setFavorites }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const headingText = "Results";
  const { searchedMovie } = useParams();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      setError(null);
      setSearchMovies([]);
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchedMovie}`
        );

        if (response.data.Response === "False") {
          setError("Ingen film hittades. Försök igen!");
        } else {
          setSearchMovies(response.data.Search);
        }
      } catch (err) {
        setError("Något gick fel vid sökningen.");
        console.error(`Sökfel: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchedMovie) {
      fetchSearchResults();
    }
  }, [searchedMovie]);

  if (isLoading) return <p>Söker efter filmer...</p>;
  if (error)
    return (
      <div className="no-match error">
        <p>{error}</p>
      </div>
    );
  if (searchMovies.length === 0)
    return (
      <div className="no-match">
        <p>inget att visa</p>
      </div>
    );

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
