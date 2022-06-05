import React, { useEffect } from 'react';
import Index from '../../components/Index/Index';
import { ContainerStyled } from './IndexPageStyles';

const IndexPage = () => {
  useEffect(() => {
    document.title = 'Annika Terwey | Index';
  }, []);

  return (
    <ContainerStyled>
      <Index />
    </ContainerStyled>
  );
};

export default IndexPage;
