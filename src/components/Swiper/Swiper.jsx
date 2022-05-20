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

  return (
    <SwiperStyled
      spaceBetween={30}
      effect={'fade'}
      loop
      navigation={isSmallDevice}
      modules={[EffectFade, Navigation]}
      fadeEffect={{ crossFade: true }}
      speed={500}
      onTransitionEnd={handleVideoSlide}
    >
      {gallery?.map(link => (
        <SwiperSlide key={link}>
          {({ isActive }) =>
            isVideo(link) ? (
              <video className={`video ${isActive ? 'active' : ''}`} loop>
                <source src={link} />
              </video>
            ) : (
              <img src={link} alt="" />
            )
          }
        </SwiperSlide>
      ))}

      <Prevbutton id="edit-img" isSmallDevice={isSmallDevice} prev />
      <NextButton id="edit-img" isSmallDevice={isSmallDevice} />
    </SwiperStyled>
  );
};

export default Swiper;
