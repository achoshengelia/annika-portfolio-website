import React from 'react';
import { Heading } from '../global/utils';
import { ContainerStyled } from './AboutStyles';
import Contents from './Contents/Contents';

const About = () => {
  return (
    <ContainerStyled>
      <Heading as="h1" isUppercase>
        About
      </Heading>
      <Contents />
    </ContainerStyled>
  );
};

export default About;
