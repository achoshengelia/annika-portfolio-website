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

  const isVideo = link => {
    if (link.includes('mp4') || link.includes('mov')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SwiperStyled
      spaceBetween={30}
      effect={'fade'}
      loop
      navigation={isSmallDevice}
      modules={[EffectFade, Navigation]}
    >
      {gallery?.map(link => (
        <SwiperSlide key={link}>
          {isVideo(link) ? (
            <video autoPlay height="100%">
              <source src={link}></source>
            </video>
          ) : (
            <img src={link} />
          )}
        </SwiperSlide>
      ))}

      <Prevbutton isSmallDevice={isSmallDevice} prev />
      <NextButton isSmallDevice={isSmallDevice} />
    </SwiperStyled>
  );
};

export default Swiper;
