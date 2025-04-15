import './Card.css';
import { Link } from 'react-router-dom';
import WatchlistButton from '../WatchlistButton/WatchlistButton';

function Card({ movie }) {
  console.log(movie);
  return (
    <Link to={`/details/${movie.imdbID}`}>
      <article className='card'>
        <WatchlistButton
          movie={movie}
        />
        <img
          className='card__img'
          src={movie.Poster}
          alt={`${movie.Title} poster`}
        />
        <p className='card__title'>{movie.Title}</p>
      </article>
    </Link>
  );
}

export default Card;
