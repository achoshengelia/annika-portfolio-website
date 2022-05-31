import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import Footer from '../../components/Footer/Footer';
import { GlobalContext } from '../../context/globalContext';
import Index from '../../components/Index/Index';
import { ContainerStyled } from './IndexPageStyles';

const IndexPage = () => {
  const { showFooter } = useContext(GlobalContext);

  return (
    <>
      <ContainerStyled>
        <Index />
      </ContainerStyled>

      {showFooter
        ? createPortal(<Footer />, document.getElementById('root'))
        : null}
    </>
  );
};

export default IndexPage;
