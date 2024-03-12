import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerStyled } from './ItemNotFoundStyles';

const ItemNotFound = ({ isCurationPage }) => {
  return (
    <ContainerStyled>
      Work not found!
      <Link to={isCurationPage ? '/curation' : '/projects'}>
        Go back to gallery
      </Link>
    </ContainerStyled>
  );
};

export default ItemNotFound;
