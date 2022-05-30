import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Heading } from '../../components/global/utils';
import { ContainerStyled, ImageStyled } from './NotFoundStyles';

const NotFound = () => {
  return (
    <ContainerStyled>
      <Heading as="h1" size="5rem" noTransform>
        Something went wrong!
      </Heading>
      <Text as="p" size="2.2rem">
        404 - We can't find that page :(
      </Text>
      <ImageStyled
        alt="uwe"
        src="https://res.cloudinary.com/dojsjcecs/image/upload/v1653928532/uwecopie_yqurpr.png"
      />
      <Link to="/">Take me back home</Link>
    </ContainerStyled>
  );
};

export default NotFound;
