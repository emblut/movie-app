import "./Card.css";
import { Link } from "react-router-dom";
import WatchlistButton from "../WatchlistButton/WatchlistButton";
import { useState } from "react";

function Card({ movie }) {
  console.log(movie);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 10;

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const displayedTitle =
    movie.Title.length > maxLength && !isExpanded
      ? `${movie.Title.substring(0, maxLength)}...`
      : movie.Title;

  const linkTo = `/details/${movie.imdbID}`;

  return (
    <article className="card">
      <WatchlistButton movie={movie} />
      <Link to={linkTo} className="card__link">
        <div className="card__img-container">
          <img
            className="card__img"
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
        </div>
        <p className="card__title">
          {movie.Title}
          {displayedTitle}
          {movie.Title.length > maxLength && (
            <button className="card__read-more" onClick={toggleExpand}>
              {isExpanded ? "Read More" : "Read Less"}
            </button>
          )}
        </p>
      </Link>
    </article>
  );
}

export default Card;
