import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Footer from '../../components/Footer/Footer';
import { GlobalContext } from '../../context/globalContext';
import About from '../../components/About/About';
import { ContainerStyled } from './AboutPageStyles';

const AboutPage = () => {
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
        <About />
      </ContainerStyled>

      {showFooter
        ? createPortal(<Footer />, document.getElementById('root'))
        : null}
    </>
  );
};

export default AboutPage;
