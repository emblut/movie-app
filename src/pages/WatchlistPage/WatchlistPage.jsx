import CardSection from '../../components/CardSection/CardSection';
import { useFavorites } from '../../context/favoritesContext';

function WatchlistPage() {
  const { favorites }  = useFavorites()

  const headingText = 'Watchlist';

  return (
    <>
      <CardSection
        headingText={headingText}
        movies={favorites}
      />
    </>
  );
}

export default WatchlistPage;
