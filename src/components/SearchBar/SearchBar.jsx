import './SearchBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [searchString, setSearchString] = useState('');

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSearch} className='header__search-bar'>
      <input
        className='header__input'
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
        type='text'
        aria-label='Search for movie'
        placeholder='Search movie'
      />
      <Link to={`/search/${searchString}`}>
        <button className='header__form-btn'>Search</button>
      </Link>
    </form>
  );
}

export default SearchBar;
