import { useParams } from 'react-router-dom';
import CardSection from '../../components/CardSection/CardSection';

function SearchPage({ favorites, setFavorites }) {
  const headingText = 'Results';
  const from = 'search';
  const { searchedMovie } = useParams();

  return (
    <div>
      <CardSection
        headingText={headingText}
        from={from}
        landingMovies={null}
        searchedMovie={searchedMovie}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default SearchPage;
