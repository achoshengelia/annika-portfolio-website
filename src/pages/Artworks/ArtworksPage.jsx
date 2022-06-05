import React, { useEffect } from 'react';
import FilterGallery from '../../components/FilterGallery';
import { ContainerStyled } from './ArtworksPageStyles';

const ArtworksPage = () => {
  useEffect(() => {
    document.title = 'Annika Terwey | Design & Artworks';
  }, []);

  return (
    <ContainerStyled>
      <FilterGallery />
    </ContainerStyled>
  );
};

export default ArtworksPage;
