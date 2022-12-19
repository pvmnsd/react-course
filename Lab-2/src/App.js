import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SkillsPage from './pages/SkillsPage';
import AboutMePage from './pages/AboutMePage';
import HobbiesPage from './pages/HobbiesPage';
import InformationPage from './pages/InformationPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<InformationPage />} />
          <Route path="about" element={<AboutMePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="hobbies" element={<HobbiesPage />} />
        </Route>
      </Routes>
      <div className="wrapper"></div>
    </BrowserRouter>
  );
};

export default App;
