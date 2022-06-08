import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { isMobileDevice } from '../../helpers';
import Video from './Video/Video';
import NextButton from './Buttons/NextButton';
import Prevbutton from './Buttons/PrevButton';
import { SwiperStyled } from './SwiperStyles';
import Image from './Image/Image';

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

  const swiperProps = {
    initialSlide: 0,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    navigation: isSmallDevice,
    modules: [EffectFade, Navigation],
    fadeEffect: { crossFade: true },
    speed: 500
  };

  return (
    <SwiperStyled {...swiperProps}>
      {gallery?.map(({ link, alt }) => (
        <SwiperSlide key={link}>
          {({ isActive }) =>
            isVideo(link) ? (
              <Video isActive={isActive} link={link} />
            ) : (
              <Image link={link} alt={alt} />
            )
          }
        </SwiperSlide>
      ))}

      <Prevbutton isSmallDevice={isSmallDevice} prev />
      <NextButton isSmallDevice={isSmallDevice} />
    </SwiperStyled>
  );
};

export default Swiper;
