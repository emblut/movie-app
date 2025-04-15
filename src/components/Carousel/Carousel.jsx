import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";
import React, { useState } from "react";

const Carousel = ({ randomMovies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!randomMovies || randomMovies.length === 0) {
    return <div className="text-center mt-5">Laddar trailers...</div>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % randomMovies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? randomMovies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="custom-carousel position-relative text-center mb-5">
      <div className="carousel-video-wrapper">
        <iframe
          className="carousel-video"
          src={randomMovies[currentIndex].Trailer_link}
          allowFullScreen
        ></iframe>
      </div>
  
      <button className="carousel-control-prev" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
  
      <button className="carousel-control-next" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
  
};

export default Carousel;
