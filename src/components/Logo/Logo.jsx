import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'}>
      <img className='header__logo' src='./src/assets/logo.jpg' alt='Logo' />
    </Link>
  );
}

export default Logo;
