import React from 'react';
import { Text } from '../../global/utils';
import {
  ContainerStyled,
  MoreButtonStyled
} from './ArtworkDetailsFooterStyles';

const ArtworkDetailsFooter = () => {
  return (
    <ContainerStyled>
      <Text size="1.6rem" isUppercase>
        extrasober
      </Text>
      <Text size="1.6rem" isUppercase>
        Curation | Co-management | 2021
      </Text>

      <MoreButtonStyled>More</MoreButtonStyled>
    </ContainerStyled>
  );
};

export default ArtworkDetailsFooter;
