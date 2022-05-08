import React from 'react';
import { CenterWrapperStyled } from '../global/utils';
import Header from './Header/Header';
import Items from './Items/Items';

const FilterGallery = () => {
  return (
    <CenterWrapperStyled>
      <Header />
      <Items />
    </CenterWrapperStyled>
  );
};

export default FilterGallery;
