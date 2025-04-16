import WatchlistButton from '../WatchlistButton/WatchlistButton';
import './DetailedCard.css';
import { useEffect, useState } from 'react';
import missingPoster from '../../assets/missing-poster.jpg';

function DetailedCard({ movieDetails }) {
  console.log('detta är detailed card' + movieDetails);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 800);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile ? (
    <article className='detailed-card' style={{padding:'20px'}}>
      <div className='detailed-card__top'>
        <div className='detailed-card__poster-wrapper'>
          <img
            className='detailed-card__poster'
            src={
              movieDetails.Poster !== 'N/A'
                ? movieDetails.Poster
                : missingPoster
            }
            alt={
              movieDetails.Poster !== 'N/A' ? movieDetails.Title : missingPoster
            }
          />
        </div>
        <div className='detailed-card__right'>
          <h1 className='detailed-card__title'>{movieDetails.Title}</h1>
          <WatchlistButton movie={movieDetails}/>
        </div>
      </div>
      <div className='detailed-card__tags'>
        <p className='detailed-card__tag'>Genre: {movieDetails.Genre}</p>
        <p className='detailed-card__tag'>Runtime: {movieDetails.Runtime}</p>
        <p className='detailed-card__tag'>Year: {movieDetails.Year}</p>
      </div>

      <p className='detailed-card__plot'>{movieDetails.Plot}</p>

      <div className='detailed-card__credits'>
        <p className='detailed-card__tag detailed-card__tag--margin-right'>
          Director: {movieDetails.Director}
        </p>
        <p className='detailed-card__tag detailed-card__tag--margin-right'>
          Writers: {movieDetails.Writer}
        </p>
        <p className='detailed-card__tag'>Actors: {movieDetails.Actors}</p>
      </div>
    </article>
  ) : (
    <div className='page-wrapper'>
    <article className='detailed-card'>
      <div className='detailed-card__poster-wrapper'>
        <img
          className='detailed-card__poster'
          src={
            movieDetails.Poster !== 'N/A' ? movieDetails.Poster : missingPoster
          }
          alt={
            movieDetails.Poster !== 'N/A' ? movieDetails.Title : missingPoster
          }
        />
      </div>

      <div className='detailed-card__right'>
        <div className='detailed-card__right-top'>
          <h1 className='detailed-card__title'>{movieDetails.Title}</h1>
          <WatchlistButton movie={movieDetails}/>
        </div>

        <div className='detailed-card__tags'>
          <p className='detailed-card__tag'>Genre: {movieDetails.Genre}</p>
          <p className='detailed-card__tag'>Runtime: {movieDetails.Runtime}</p>
          <p className='detailed-card__tag'>Year: {movieDetails.Year}</p>
        </div>

        <p className='detailed-card__plot'>{movieDetails.Plot}</p>

        <div className='detailed-card__credits'>
          <p className='detailed-card__tag'>
            Director: {movieDetails.Director}
          </p>
          <p className='detailed-card__tag'>Writers: {movieDetails.Writer}</p>
          <p className='detailed-card__tag'>Actors: {movieDetails.Actors}</p>
        </div>
      </div>
    </article>
    </div>
  );
}

export default DetailedCard;
