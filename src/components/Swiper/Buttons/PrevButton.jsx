import React from 'react';
import { useSwiper } from 'swiper/react';
import { ContainerStyled } from './ButtonStyles';

const Prevbutton = () => {
  const swiper = useSwiper();

  return <ContainerStyled onClick={() => swiper.slidePrev()} prev />;
};

export default Prevbutton;
