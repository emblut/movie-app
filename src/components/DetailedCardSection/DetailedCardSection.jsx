import DetailedCard from '../DetailedCard/DetailedCard';

function DetailedCardSection({ movieDetails }) {
  return (
    <section className='detailed__wrapper'>
      <DetailedCard movieDetails={movieDetails} />
    </section>
  );
}

export default DetailedCardSection;
