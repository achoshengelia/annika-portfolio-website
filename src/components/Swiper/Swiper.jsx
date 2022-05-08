import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import NextButton from './Buttons/NextButton';
import Prevbutton from './Buttons/PrevButton';
import { SwiperStyled } from './SwiperStyles';

const Swiper = () => {
  return (
    <SwiperStyled
      spaceBetween={30}
      effect={'fade'}
      loop
      navigation
      modules={[EffectFade, Navigation]}
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <NextButton />
      <Prevbutton />
    </SwiperStyled>
  );
};

export default Swiper;
