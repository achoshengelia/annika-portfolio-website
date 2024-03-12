import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerStyled } from './LandingTextStyles';

const LandingText = () => {
  return (
    <ContainerStyled
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.3
        }
      }}
      exit={{
        opacity: 0,
        y: -50,
        transition: {
          duration: 0.6
        }
      }}
    >
      Welcome to my Portfolio Website! <Link to="/about">I am</Link> a
      German-Italian <Link to="/projects">designer</Link>,{' '}
      <Link to="/projects">multimedia artist</Link> and a{' '}
      <Link to="/curation">curator</Link>.
    </ContainerStyled>
  );
};

export default LandingText;
