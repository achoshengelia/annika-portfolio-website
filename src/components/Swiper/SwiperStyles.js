import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper } from 'swiper/react';
import { PopIn } from '../../animations';

export const SpinnerWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
`;

export const VideoStyled = styled.video`
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')} !important;
`;

export const ImageStyled = styled.img`
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')} !important;
`;

export const SwiperWrapperStyled = styled(motion.div)``;

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${PopIn} 0.5s forwards 0.6s;

  .swiper-slide {
    background-position: center;
    background-size: cover;

    & > img,
    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
