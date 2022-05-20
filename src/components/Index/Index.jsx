import React from 'react';
import { Heading } from '../global/utils';
import { ContainerStyled } from './IndexStyles';
import Items from './Items/Items';

const Index = () => {
  return (
    <ContainerStyled>
      <Heading as="h1" isUppercase>
        index
      </Heading>
      <Items />
    </ContainerStyled>
  );
};

export default Index;
