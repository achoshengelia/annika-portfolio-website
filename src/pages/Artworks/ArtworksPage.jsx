import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FilterGallery from '../../components/FilterGallery';
import { GlobalContext } from '../../context/globalContext';
import Footer from '../../components/Footer/Footer';
import { ContainerStyled } from './ArtworksPageStyles';

const ArtworksPage = () => {
  const { showFooter, handleSetShowFooter } = useContext(GlobalContext);

  useEffect(() => {
    handleSetShowFooter(true);

    return () => {
      handleSetShowFooter(false);
    };
  }, [handleSetShowFooter]);

  return (
    <>
      <ContainerStyled>
        <FilterGallery />
      </ContainerStyled>

      {showFooter
        ? createPortal(<Footer />, document.getElementById('root'))
        : null}
    </>
  );
};

export default ArtworksPage;
