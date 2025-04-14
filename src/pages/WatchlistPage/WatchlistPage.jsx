import CardSection from '../../components/CardSection/CardSection';

function WatchlistPage({ favorites, setFavorites }) {
  const headingText = 'Watchlist';
  const from = 'watchlist';

  return (
    <div>
      <CardSection
        headingText={headingText}
        from={from}
        landingMovies={null}
        searchedMovie={null}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}

export default WatchlistPage;
