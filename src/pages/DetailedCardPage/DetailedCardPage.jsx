import { useState, useEffect } from "react";
import DetailedCardSection from "../../components/DetailedCardSection/DetailedCardSection";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailedCardPage({ favorites, setFavorites }) {
  const [movieDetails, setMovieDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true); // ← Estado para controlar la carga // state for loading
  const [error, setError] = useState(null); // ← Estado para manejar errores // state for error handling
  const apiKey = "aba4b16f";
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${apiKey}&plot=full&i=${id}`
        );

        if (response.data.Response === "False") {
          setError(response.data.Error); // ← Mensaje de la API, como "Movie not found!"
        } else {
          setMovieDetails(response.data);
        }
      } catch (err) {
        setError("Något gick fel vid hämtning av filmdata.", err); // ← Mensaje personalizado
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // 💬 Renderizado condicional //
  if (isLoading) return <p>Laddar filmdata...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <DetailedCardSection
        movieDetails={movieDetails}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default DetailedCardPage;
