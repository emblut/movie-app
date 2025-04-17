import { useFavorites } from '../../context/favoritesContext';

import CardSection from '../../components/CardSection/CardSection';

function WatchlistPage() {
  const { favorites } = useFavorites();

  const headingText = 'Watchlist';

  return (
    <>
      <CardSection headingText={headingText} movies={favorites} />
    </>
  );
}

export default WatchlistPage;
