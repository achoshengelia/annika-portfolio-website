import React from 'react';
import Header from '../../components/Artworks/Header/Header';
import Items from '../../components/Artworks/Items/Items';
import { ContainerStyled } from './ArtworksPageStyles';

const ArtworksPage = () => {
  return (
    <ContainerStyled>
      <Header />
      <Items />
    </ContainerStyled>
  );
};

export default ArtworksPage;
