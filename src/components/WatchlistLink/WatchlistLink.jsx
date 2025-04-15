import './WatchlistLink.css'
import { Link } from 'react-router-dom';

function WatchlistLink() {
  return (
    <Link className='header__watchlist' to={'/watchlist'}>
      Watchlist
    </Link>
  );
}

export default WatchlistLink;
