import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerStyled } from './ItemNotFoundStyles';

const ItemNotFound = isCurationPage => {
  return (
    <ContainerStyled>
      Work not found!
      <button>
        <Link to={isCurationPage ? '/design-artworks' : '/curation'}>
          Go back to gallery
        </Link>
      </button>
    </ContainerStyled>
  );
};

export default ItemNotFound;
