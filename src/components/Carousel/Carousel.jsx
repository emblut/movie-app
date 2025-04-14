const Carousel = ({ randomMovies }) => {
  return (
    <div id='videoCarousel' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        {randomMovies.map((randomMovie, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={index}
          >
            <video className='d-block w-100' controls>
              <source src={randomMovie.Trailer_link} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#videoCarousel'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#videoCarousel'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;
