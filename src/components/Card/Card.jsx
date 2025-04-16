import './Card.css';
import { Link } from 'react-router-dom';
import WatchlistButton from '../WatchlistButton/WatchlistButton';
import missingPoster from '../../assets/missing-poster.jpg'; 

function Card({ movie }) {
  
  const posterSrc = movie.Poster !== 'N/A' ? movie.Poster : missingPoster;
  
  return (
    <Link to={`/details/${movie.imdbID}`}>
      <article className='card'>
        <WatchlistButton movie={movie} />
        <img
          className='card__img'
          src={posterSrc}
          alt={`${movie.Title} poster`}
        />
        <p className='card__title'>{movie.Title}</p>
      </article>
    </Link>
  );
}

export default Card;
