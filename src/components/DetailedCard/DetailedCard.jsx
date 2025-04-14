import WatchlistButton from '../WatchlistButton/WatchlistButton';
import './DetailedCard.css';

function DetailedCard({ movieDetails, favorites, setFavorites }) {
  return (
    <article className='detailed-card'>
      <div className='detailed-card__img-wrapper'>
        <img
          className='detailed-card__img'
          src={movieDetails.Poster}
          alt={`${movieDetails.Title} poster}`}
        />
      </div>

      <div className='detailed-card__right-container'>
        <div className='detailed-card__right-top-container'>
          <h1 className='detailed-card__heading'>{movieDetails.Title}</h1>
          <WatchlistButton />
        </div>

        <div className='detailed-card__top-category-container'>
          <p className='detailed-card__category'>{movieDetails.Genre}</p>
          <p className='detailed-card__category'>
            Runtime: {movieDetails.Runtime}
          </p>
          <p className='detailed-card__category'>{movieDetails.Year}</p>
        </div>

        <p className='detailed-card__plot'>{movieDetails.Plot}</p>

        <div className='detailed-card__bottom-category-container'>
          <p className='detailed-card__category'>
            Director: {movieDetails.Director}
          </p>
          <p className='detailed-card__category'>
            Writers: {movieDetails.Writer}
          </p>
          <p className='detailed-card__category'>
            Actors: {movieDetails.Actors}
          </p>
        </div>
      </div>
    </article>
  );
}

export default DetailedCard;
