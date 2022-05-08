import React from 'react';
import { CenterWrapperStyled } from '../global/utils';
import Swiper from '../Swiper/Swiper';
import { ContainerStyled } from './ArtworkDetailsStyles';
import ArtworkDetailsFooter from './ArtworkDetailsFooter/ArtworkDetailsFooter';

const ArtworkDetails = () => {
  return (
    <ContainerStyled>
      <Swiper />
      <ArtworkDetailsFooter />
    </ContainerStyled>
  );
};

export default ArtworkDetails;
