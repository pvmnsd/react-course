import { Outlet } from 'react-router-dom';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

const MainPage = () => {
  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
