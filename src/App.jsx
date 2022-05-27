import { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CurationsPage from './pages/Curations/CurationsPage';
import ArtworksPage from './pages/Artworks/ArtworksPage';
import ArtworkDetailsPage from './pages/ArtworkDetails/ArtworkDetailsPage';
import IndexPage from './pages/Index/IndexPage';
import ImprintPage from './pages/Imprint/ImprintPage';
import CurationDetailsPage from './pages/CurationDetails/CurationDetailsPage';
import AboutPage from './pages/About/AboutPage';
import LandingPage from './pages/Landing/LandingPage';
import { ScrollToTop } from './components/global/utils';
import { GlobalContext } from './context/globalContext';

const App = () => {
  const { showFooter } = useContext(GlobalContext);
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route index element={<LandingPage />} />
          <Route path="design-artworks" element={<ArtworksPage />} />
          <Route path="design-artworks/:id" element={<ArtworkDetailsPage />} />
          <Route path="curation" element={<CurationsPage />} />
          <Route path="curation/:id" element={<CurationDetailsPage />} />
          <Route path="index" element={<IndexPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="imprint" element={<ImprintPage />} />
        </Routes>
      </AnimatePresence>
      {showFooter ? <Footer /> : null}
    </>
  );
};

export default App;
