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
        onChange={(event) => {
          setSearchString(event.target.value);
        }}
        type='text'
        placeholder='Search movie'
      />

      <Link to={`/search/${searchString}`}>
        <button>Search</button>
      </Link>
    </form>
  );
}

export default SearchBar;
