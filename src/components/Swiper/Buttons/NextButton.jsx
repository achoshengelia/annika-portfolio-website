import React from 'react';
import { useSwiper } from 'swiper/react';
import { ContainerStyled } from './ButtonStyles';

const NextButton = () => {
  const swiper = useSwiper();

  return <ContainerStyled onClick={() => swiper.slideNext()} />;
};

export default NextButton;
