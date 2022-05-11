import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  /* max-height: 60rem;
  max-width */
  position: relative;

  /* .swiper-wrapper {
    overflow: hidden;
  } */

  .swiper-slide {
    /* background-position: center;
    background-size: cover; */
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .swiper-slide video {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: scale-down;
  }
`;
