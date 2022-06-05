import React, { useEffect } from 'react';
import Imprint from '../../components/Imprint/Imprint';
import { ContainerStyled } from './ImprintPageStyles';

const ImprintPage = () => {
  useEffect(() => {
    document.title = 'Annika Terwey | Imprint';
  }, []);

  return (
    <ContainerStyled>
      <Imprint />
    </ContainerStyled>
  );
};

export default ImprintPage;
