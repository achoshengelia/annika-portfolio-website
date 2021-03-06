import React, { useEffect } from 'react';
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

  useEffect(() => {
    document.title = 'Annika Terwey';
  }, []);

  return (
    <ContainerStyled>
      {!isSmallDevice ? (
        <Trail>
          <LandingText />
        </Trail>
      ) : (
        <Shuffle>
          <LandingText />
        </Shuffle>
      )}
    </ContainerStyled>
  );
};

export default LandingPage;
