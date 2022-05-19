import styled from 'styled-components';
import { Swiper } from 'swiper/react';

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
