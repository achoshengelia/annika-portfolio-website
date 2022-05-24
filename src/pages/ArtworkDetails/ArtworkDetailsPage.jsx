import React, { useContext, useEffect } from 'react';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled } from './ArtworkDetailsPageStyles';

const ArtworkDetailsPage = () => {
  const { handleSetShowFooter } = useContext(GlobalContext);

  useEffect(() => {
    handleSetShowFooter(false);

    return () => {
      handleSetShowFooter(true);
    };
  }, [handleSetShowFooter]);

  return (
    <ContainerStyled>
      <ItemDetails />
    </ContainerStyled>
  );
};

export default ArtworkDetailsPage;
