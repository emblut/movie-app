import './WatchlistLink.css';
import { Link } from 'react-router-dom';

function WatchlistLink() {
  return (
    <Link className='header__watchlist-link' to={'/watchlist'}>
      <div className='header__watchlist'>Watchlist</div>
    </Link>
  );
}

export default WatchlistLink;
