import { useState, useEffect } from 'react';
import DetailedCardSection from '../../components/DetailedCardSection/DetailedCardSection';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailedCardPage() {
  const [movieDetails, setMovieDetails] = useState('');
  const apiKey = 'aba4b16f';
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&plot=full&i=${id}`)
      .then((response) => {
        setMovieDetails(response.data);
      });
  }, []);
  return (
    <>
      <DetailedCardSection
        movieDetails={movieDetails}
      />
    </>
  );
}

export default DetailedCardPage;
