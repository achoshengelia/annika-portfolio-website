import React, { lazy, Suspense, useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import LandingPage from './pages/Landing/LandingPage';
import { ScrollToTop } from './components/global/utils';
import Footer from './components/Footer/Footer';
import { GlobalContext } from './context/globalContext';

const ArtworksPage = lazy(() => import('./pages/Artworks/ArtworksPage'));
const ArtworkDetailsPage = lazy(() =>
  import('./pages/ArtworkDetails/ArtworkDetailsPage')
);
const CurationsPage = lazy(() => import('./pages/Curations/CurationsPage'));
const CurationDetailsPage = lazy(() =>
  import('./pages/CurationDetails/CurationDetailsPage')
);
const IndexPage = lazy(() => import('./pages/Index/IndexPage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ImprintPage = lazy(() => import('./pages/Imprint/ImprintPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

const App = () => {
  const location = useLocation();
  const { showFooter } = useContext(GlobalContext);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div />}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route index element={<LandingPage />} />
            <Route path="design-artworks" element={<ArtworksPage />} />
            <Route
              path="design-artworks/:id"
              element={<ArtworkDetailsPage />}
            />
            <Route path="curation" element={<CurationsPage />} />
            <Route path="curation/:id" element={<CurationDetailsPage />} />
            <Route path="index" element={<IndexPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="imprint" element={<ImprintPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <AnimatePresence>{showFooter ? <Footer /> : null}</AnimatePresence>
      </Suspense>
    </>
  );
};

export default App;
