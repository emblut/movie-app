import Heading from '../Heading/Heading';
import DetailedCard from '../DetailedCard/DetailedCard';

function DetailedCardSection({ movieDetails }) {
  return (
    <section className='detailed__wrapper'>
      {/* <Heading headingText={movieDetails.Title} /> */}
      <DetailedCard
        movieDetails={movieDetails}
      />
    </section>
  );
}

export default DetailedCardSection;
