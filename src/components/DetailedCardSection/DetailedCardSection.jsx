import Heading from '../Heading/Heading';
import DetailedCard from '../DetailedCard/DetailedCard';

function DetailedCardSection({ movieDetails, favorites, setFavorites }) {
  return (
    <section>
      {/* <Heading headingText={movieDetails.Title} /> */}
      <DetailedCard
        movieDetails={movieDetails}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </section>
  );
}

export default DetailedCardSection;
