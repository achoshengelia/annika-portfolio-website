import React, { useEffect } from 'react';
import About from '../../components/About/About';
import { ContainerStyled } from './AboutPageStyles';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Annika Terwey | About';
  }, []);

  return (
    <ContainerStyled>
      <About />
    </ContainerStyled>
  );
};

export default AboutPage;
