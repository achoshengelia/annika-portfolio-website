import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: scale-down;
  }

  .swiper-slide video {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: scale-down;
  }
`;
