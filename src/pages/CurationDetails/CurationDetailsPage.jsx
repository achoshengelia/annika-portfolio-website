import React from 'react';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import { ContainerStyled } from './CurationDetailsPageStyles';

const CurationDetailsPage = () => {
  return (
    <ContainerStyled>
      <ItemDetails isCurationPage />
    </ContainerStyled>
  );
};

export default CurationDetailsPage;
