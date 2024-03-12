import React from 'react';
import { useSwiper } from 'swiper/react';
import Next from '../../../assets/icons/next.png';
import { ContainerStyled } from './ButtonStyles';

const NextButton = ({ isSmallDevice }) => {
  const swiper = useSwiper();

  return (
    <ContainerStyled
      isSmallDevice={isSmallDevice}
      onClick={() => (!isSmallDevice ? swiper.slideNext() : null)}
    >
      {isSmallDevice ? (
        // <i onClick={() => swiper.slideNext()} alt="arrow" />
        <img src={Next} onClick={() => swiper.slideNext()} alt="arrow" />
      ) : null}
    </ContainerStyled>
  );
};

export default NextButton;
