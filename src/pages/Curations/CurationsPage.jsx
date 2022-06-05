import React, { useContext, useEffect } from 'react';
import FilterGallery from '../../components/FilterGallery';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled } from './CurationsPageStyles';

const CurationsPage = () => {
  const { setIsCurationsPage } = useContext(GlobalContext);

  useEffect(() => {
    setIsCurationsPage(true);

    return () => setIsCurationsPage(false);
  }, [setIsCurationsPage]);

  return (
    <ContainerStyled>
      <FilterGallery />
    </ContainerStyled>
  );
};

export default CurationsPage;
