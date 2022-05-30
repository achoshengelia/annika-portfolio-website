import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../global/utils';
import { ContainerStyled } from './LandingTextStyles';

const LandingText = () => {
  return (
    <ContainerStyled>
      <Text as="p" size="10rem">
        Welcome to my Portfolio Website! <Link to="/about">I am</Link> a
        German-Italian <Link to="/design-artworks">designer</Link>,{' '}
        <Link to="/design-artworks">multimedia artist</Link> and a{' '}
        <Link to="/curation">curator</Link>.
      </Text>
    </ContainerStyled>
  );
};

export default LandingText;
