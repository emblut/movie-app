import './CardList.css';
import Card from '../Card/Card';
import NoMatch from '../NoMatch/NoMatch';

function CardList({ movies }) {
  if (movies.length <= 0 ) {
    return <NoMatch />;
  } else {
    return (
      <section className='card-list'>
        {movies.map((movie) => {
          return (
            <Card
              movie={movie}
            />
          );
        })}
      </section>
    );
  }
}

export default CardList;
