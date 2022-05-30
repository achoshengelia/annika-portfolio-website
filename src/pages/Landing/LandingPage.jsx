import React from 'react';
import Trail from '../../components/Trail/Trail';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { isMobileDevice } from '../../helpers';
import Shuffle from '../../components/Shuffle/Shuffle';
import LandingText from '../../components/LandingText/LandingText';
import { ContainerStyled } from './LandingPageStyles';

const screenMD = 800;

const LandingPage = () => {
  const { width } = useWindowDimensions();

  const isSmallDevice = width < screenMD || isMobileDevice();

  return (
    <ContainerStyled>
      {!isSmallDevice ? <Trail /> : <Shuffle />}
      <LandingText />
    </ContainerStyled>
  );
};

export default LandingPage;
