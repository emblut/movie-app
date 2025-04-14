import './CardList.css';
import Card from '../Card/Card';
import NoMatch from '../NoMatch/NoMatch';

function CardList({ movies, favorites, setFavorites }) {
  if (movies.length <= 0 ) {
    return <NoMatch />;
  } else {
    return (
      <section className='card-list'>
        {movies.map((movie) => {
          return (
            <Card
              movie={movie}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          );
        })}
      </section>
    );
  }
}

export default CardList;
