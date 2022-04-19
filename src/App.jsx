import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArtworksPage from './pages/Artworks/ArtworksPage';
import Menu from './components/Menu/Menu';
import Index from './components/Index/Index';
import About from './components/About/About';
import CurationsPage from './pages/Curations/CurationsPage';
import Imprint from './components/Imprint/Imprint';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleShowMenu = () => {
    setShowMenu(prevState => !prevState);
    document.body.style.overflow = !showMenu ? 'hidden' : '';
  };

  return (
    <>
      <Header handleToggleShowMenu={handleToggleShowMenu} showMenu={showMenu} />

      {showMenu && <Menu handleToggleShowMenu={handleToggleShowMenu} />}
      <Routes>
        <Route path="design-artworks" element={<ArtworksPage />} />
        <Route path="curation" element={<CurationsPage />} />
        <Route path="index" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="imprint" element={<Imprint />} />
      </Routes>
      {!showMenu && <Footer />}
    </>
  );
};

export default App;
