import React, { useContext, useEffect } from 'react';
import FilterGallery from '../../components/FilterGallery';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled } from './CurationsPageStyles';

const CurationsPage = () => {
  const { setIsCurationsPage } = useContext(GlobalContext);

  useEffect(() => {
    document.title = 'Annika Terwey | Curation';
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
