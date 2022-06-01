import React, { useState } from 'react';
import { EffectFade, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { isMobileDevice } from '../../helpers';
import { Spinner } from '../global/icons';
import NextButton from './Buttons/NextButton';
import Prevbutton from './Buttons/PrevButton';
import {
  ImageStyled,
  SpinnerWrapperStyled,
  SwiperStyled,
  VideoStyled
} from './SwiperStyles';

const Item = ({ isActive, isVideo, link }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {isVideo ? (
        <VideoStyled
          className={`video ${isActive ? 'active' : ''}`}
          loop
          onCanPlay={() => setIsLoaded(true)}
          isLoaded={isLoaded}
        >
          <source src={link} />
        </VideoStyled>
      ) : (
        <ImageStyled
          src={link}
          alt=""
          onLoad={() => setIsLoaded(true)}
          isLoaded={isLoaded}
        />
      )}

      {!isLoaded ? (
        <SpinnerWrapperStyled>
          <Spinner />
        </SpinnerWrapperStyled>
      ) : null}
    </>
  );
};

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

  const handleVideoSlide = () => {
    const videos = [...document.getElementsByClassName('video')];

    videos.forEach(video => {
      if (video.classList.value.includes('active')) {
        video.play();
      } else {
        video.pause();
      }
    });
  };

  const swiperProps = {
    initialSlide: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    navigation: isSmallDevice,
    modules: [EffectFade, Navigation],
    fadeEffect: { crossFade: true },
    speed: 500,
    onTransitionEnd: handleVideoSlide
  };

  return (
    <SwiperStyled {...swiperProps}>
      {gallery?.map(link => (
        <SwiperSlide key={link}>
          {({ isActive }) => (
            <Item isActive={isActive} isVideo={isVideo(link)} link={link} />
          )}
        </SwiperSlide>
      ))}

      <Prevbutton isSmallDevice={isSmallDevice} prev />
      <NextButton isSmallDevice={isSmallDevice} />
    </SwiperStyled>
  );
};

export default Swiper;
