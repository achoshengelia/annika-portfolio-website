import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  max-width: 80rem;
  height: 50rem;
  position: relative;

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
