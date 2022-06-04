import React from 'react';
import FilterGallery from '../../components/FilterGallery';
import { ContainerStyled } from './ArtworksPageStyles';

const ArtworksPage = () => {
  return (
    <ContainerStyled>
      <FilterGallery />
    </ContainerStyled>
  );
};

export default ArtworksPage;
