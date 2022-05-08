import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { isMobileDevice } from '../../helpers';
import NextButton from './Buttons/NextButton';
import Prevbutton from './Buttons/PrevButton';
import { SwiperStyled } from './SwiperStyles';

const screenMD = 800;

const Swiper = ({ gallery }) => {
  const { width } = useWindowDimensions();

  const isSmallDevice = width < screenMD || isMobileDevice();

  return (
    <SwiperStyled
      spaceBetween={30}
      effect={'fade'}
      loop
      navigation={isSmallDevice}
      modules={[EffectFade, Navigation]}
    >
      {gallery?.map(image => (
        <SwiperSlide key={image}>
          <img src={image} />
        </SwiperSlide>
      ))}

      <Prevbutton isSmallDevice={isSmallDevice} prev />
      <NextButton isSmallDevice={isSmallDevice} />
    </SwiperStyled>
  );
};

export default Swiper;
