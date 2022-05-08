import React, { useContext, useEffect } from 'react';
import ArtworkDetails from '../../components/ArtworkDetails/ArtworkDetails';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled } from './ArtworkDetailsPageStyles';

const ArtworkDetailsPage = () => {
  const { handleSetShowFooter } = useContext(GlobalContext);

  useEffect(() => {
    handleSetShowFooter(false);

    return () => {
      handleSetShowFooter(true);
    };
  }, []);

  return (
    <ContainerStyled>
      <ArtworkDetails />
    </ContainerStyled>
  );
};

export default ArtworkDetailsPage;
