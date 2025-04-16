import "./Card.css";
import { Link } from "react-router-dom";
import WatchlistButton from "../WatchlistButton/WatchlistButton";
import { useState } from "react";

function Card({ movie }) {
  console.log(movie);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 35;

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
      <div className="card-container">
        <WatchlistButton movie={movie} />
        <Link to={linkTo} className="card__link">
          <img
            className="card__img"
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />

          <p className="card__title" onClick={toggleExpand}>
            {displayedTitle}
            {movie.Title.length > maxLength && (
              <span className="card__read-more">
                {isExpanded ? "Read Less" : "Read More"}
              </span>
            )}
          </p>
        </Link>
      </div>
    </article>
  );
}

export default Card;
