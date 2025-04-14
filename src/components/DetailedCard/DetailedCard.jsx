import WatchlistButton from '../WatchlistButton/WatchlistButton';

function DetailedCard({ movieDetails, favorites, setFavorites }) {
  console.log(movieDetails);
  return (
    <article>
      <img src={movieDetails.Poster} alt='' />
      <WatchlistButton />
      <p>{movieDetails.Plot}</p>
      <p>Genre: {movieDetails.Genre}</p>
      <p>Writer: {movieDetails.Writer}</p>
    </article>
  );
}

export default DetailedCard;
