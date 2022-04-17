import React from 'react';
import { CenterWrapperStyled, Heading } from '../../global/utils';
import Filters from './Filters/Filters';
import { ContainerStyled } from './HeaderStyles';

const Header = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <Heading as="h1" isUppercase>
          design & artworks
        </Heading>
        <Filters />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Header;
