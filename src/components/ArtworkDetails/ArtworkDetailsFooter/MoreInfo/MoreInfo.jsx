import React from 'react';
import { Text } from '../../../global/utils';
import { ContainerStyled } from './MoreInfoStyles';

const MoreInfo = ({ moreInfo }) => {
  return (
    <ContainerStyled>
      <Text as="p">{moreInfo}</Text>
    </ContainerStyled>
  );
};

export default MoreInfo;
