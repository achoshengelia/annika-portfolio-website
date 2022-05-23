import React from 'react';
import { Heading } from '../global/utils';
import { ContainerStyled } from './ImprintStyles';
import ImprintContent from './ImprintContent/ImprintContent';

const Imprint = () => {
  return (
    <ContainerStyled>
      <Heading as="h1" isUppercase>
        Imprint
      </Heading>
      <ImprintContent />
    </ContainerStyled>
  );
};

export default Imprint;
