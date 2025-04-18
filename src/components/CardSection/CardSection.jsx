import { useEffect } from 'react';

import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';

function CardSection({ headingText, movies }) {
  useEffect(() => {}, [movies]);

  return (
    <section className='card-section'>
      <Heading headingText={headingText} />
      <CardList movies={movies} />
    </section>
  );
}

export default CardSection;
