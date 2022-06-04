import React from 'react';
import FilterGallery from '../../components/FilterGallery';
import { ContainerStyled } from './CurationsPageStyles';

const CurationsPage = () => {
  return (
    <ContainerStyled>
      <FilterGallery />
    </ContainerStyled>
  );
};

export default CurationsPage;
