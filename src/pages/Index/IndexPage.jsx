import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Footer from '../../components/Footer/Footer';
import { GlobalContext } from '../../context/globalContext';
import Index from '../../components/Index/Index';
import { ContainerStyled } from './IndexPageStyles';

const IndexPage = () => {
  const { showFooter, handleSetShowFooter } = useContext(GlobalContext);

  useEffect(() => {
    handleSetShowFooter(true);

    return () => {
      handleSetShowFooter(false);
    };
  }, [handleSetShowFooter]);

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
