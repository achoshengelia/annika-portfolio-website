import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Footer from '../../components/Footer/Footer';
import { GlobalContext } from '../../context/globalContext';
import Imprint from '../../components/Imprint/Imprint';
import { ContainerStyled } from './ImprintPageStyles';

const ImprintPage = () => {
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
        <Imprint />
      </ContainerStyled>

      {showFooter
        ? createPortal(<Footer />, document.getElementById('root'))
        : null}
    </>
  );
};

export default ImprintPage;
