import React from 'react';
import { Heading } from '../global/utils';
import Contents from './Contents/Contents';
import { ContainerStyled, HeaderWrapperStyled } from './AboutStyles';

const About = () => {
  return (
    <ContainerStyled>
      <HeaderWrapperStyled
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3
          }
        }}
        exit={{
          opacity: 0,
          y: -50,
          transition: {
            duration: 0.5
          }
        }}
      >
        <Heading as="h1" isUppercase>
          About
        </Heading>
      </HeaderWrapperStyled>
      <Contents />
    </ContainerStyled>
  );
};

export default About;
