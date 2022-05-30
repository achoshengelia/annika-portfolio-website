import React from 'react';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import { ContainerStyled } from './ArtworkDetailsPageStyles';

const ArtworkDetailsPage = () => {
  return (
    <ContainerStyled>
      <ItemDetails />
    </ContainerStyled>
  );
};

export default ArtworkDetailsPage;
