import React, { useContext, useEffect } from 'react';
import Trail from '../../components/Trail/Trail';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { GlobalContext } from '../../context/globalContext';
import { isMobileDevice } from '../../helpers';
import Shuffle from '../../components/Shuffle/Shuffle';
import { ContainerStyled } from './LandingPageStyles';

const screenMD = 800;

const LandingPage = () => {
  const { width } = useWindowDimensions();
  const { handleSetShowFooter } = useContext(GlobalContext);

  const isSmallDevice = width < screenMD || isMobileDevice();

  useEffect(() => {
    handleSetShowFooter(false);

    return () => {
      handleSetShowFooter(true);
    };
  }, [handleSetShowFooter]);

  return (
    <ContainerStyled>
      {!isSmallDevice ? <Trail /> : <Shuffle />}
    </ContainerStyled>
  );
};

export default LandingPage;
