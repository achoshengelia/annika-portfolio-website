import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import FilterGallery from '../../components/FilterGallery';
import Footer from '../../components/Footer/Footer';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled } from './CurationsPageStyles';

const CurationsPage = () => {
  const { showFooter } = useContext(GlobalContext);

  return (
    <>
      <ContainerStyled>
        <FilterGallery />
      </ContainerStyled>

      {showFooter
        ? createPortal(<Footer />, document.getElementById('root'))
        : null}
    </>
  );
};

export default CurationsPage;
