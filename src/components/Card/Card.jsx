import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

import missingPoster from '../../assets/missing-poster.jpg';
import WatchlistButton from '../WatchlistButton/WatchlistButton';

function Card({ movie }) {
  const posterSrc = movie.Poster !== 'N/A' ? movie.Poster : missingPoster;
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 35;

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const formatTitle = (title) => {
    if (!title) return '';
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };

  const formattedTitle = formatTitle(movie.Title);

  const displayedTitle =
    formattedTitle.length > maxLength && !isExpanded
      ? `${formattedTitle.substring(0, maxLength)}...`
      : formattedTitle;

  // const linkTo = `/details/${movie.imdbID}`;

  return (
    <article className='card'>
      <WatchlistButton movie={movie} />
      <Link to={`/details/${movie.imdbID}`} className='card__link'>
        <img
          className='card__img'
          src={posterSrc}
          alt={`${movie.Title} poster`}
        />
        <p className='card__title'>
          {displayedTitle}
          {formattedTitle.length > maxLength && (
            <span className='card__read-more' onClick={toggleExpand}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </span>
          )}
        </p>
      </Link>
    </article>
  );
}

export default Card;
