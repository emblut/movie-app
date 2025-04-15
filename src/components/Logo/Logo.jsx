import './Logo.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

function Logo() {
  return (
    <Link to={'/'}>
      <img className='header__logo' src={logo} alt='Logo' />
    </Link>
  );
}

export default Logo;
