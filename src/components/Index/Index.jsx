import React from 'react';
import { Heading } from '../global/utils';
import Items from './Items/Items';
import { ContainerStyled, HeaderWrapperStyled } from './IndexStyles';

const Index = () => {
  return (
    <ContainerStyled>
      <HeaderWrapperStyled
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3
          }
        }}
        exit={{
          opacity: 0,
          y: -50,
          transition: {
            duration: 0.5
          }
        }}
      >
        <Heading as="h1" isUppercase>
          index
        </Heading>
      </HeaderWrapperStyled>
      <Items />
    </ContainerStyled>
  );
};

export default Index;
