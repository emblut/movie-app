import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <section className='layout__wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default Layout;
