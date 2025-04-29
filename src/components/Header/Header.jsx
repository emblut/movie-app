import "./Header.css";
import Logo from "../Logo/Logo";
import SearchBar from "../Searchbar/Searchbar";
import WatchlistLink from "../WatchlistLink/WatchlistLink";

function Header() {
  return (
    <header className="header" aria-label=" header">
      <Logo />
      <SearchBar />
      <WatchlistLink />
    </header>
  );
}

export default Header;
