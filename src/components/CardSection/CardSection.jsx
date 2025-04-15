import './CardSection.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from '../Heading/Heading';
import CardList from '../CardList/CardList';

function CardSection({ headingText, movies, favorites, setFavorites }) {
  useEffect(() => {
   
  }, [movies]);

  return (
    <section className='card-section'>
      <Heading headingText={headingText} />
      <CardList
        movies={movies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </section>
  );
}

export default CardSection;
