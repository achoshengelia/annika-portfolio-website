import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper } from 'swiper/react';

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
