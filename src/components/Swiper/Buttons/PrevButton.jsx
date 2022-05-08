import React from 'react';
import { useSwiper } from 'swiper/react';
import Prev from '../../../assets/icons/prev.png';
import { ContainerStyled } from './ButtonStyles';

const Prevbutton = ({ isSmallDevice }) => {
  const swiper = useSwiper();

  return (
    <ContainerStyled
      isSmallDevice={isSmallDevice}
      onClick={() => !isSmallDevice && swiper.slidePrev()}
      prev
    >
      {isSmallDevice ? (
        <img src={Prev} onClick={() => swiper.slidePrev()} />
      ) : null}
    </ContainerStyled>
  );
};

export default Prevbutton;
