import './Footer.css';

import BackToTop from '../BackToTop/BackToTop';

export default function Footer() {
  return (
    <footer className='footer'>
      <section className='footer__text'>
        <p style={{ margin: 0 }}>
          &copy; 2025 My Movie Database. All rights reserved.
        </p>
        <p style={{ margin: 0 }}>
          Developed by Embla Holgersson, Emilia Holmqvist, Emilia Myrup, Belinda
          Canovic & Carolina Cárdenas
        </p>
      </section>
      <div className='footer__btt-wrapper'>
        <BackToTop />
      </div>
    </footer>
  );
}
