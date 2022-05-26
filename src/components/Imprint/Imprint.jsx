import React from 'react';
import { Heading } from '../global/utils';
import ImprintContent from './ImprintContent/ImprintContent';
import { ContainerStyled, HeaderWrapperStyled } from './ImprintStyles';

const Imprint = () => {
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
          Imprint
        </Heading>
      </HeaderWrapperStyled>
      <ImprintContent />
    </ContainerStyled>
  );
};

export default Imprint;
