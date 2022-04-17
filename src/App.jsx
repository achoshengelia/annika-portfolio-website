import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ArtworksPage from './pages/Artworks/ArtworksPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="design-artworks" element={<ArtworksPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
