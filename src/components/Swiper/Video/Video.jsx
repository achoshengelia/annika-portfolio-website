import React, { useState, useRef, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { PlayButtonIcon, Spinner } from '../../global/icons';
import {
  PlayButtonWrapperStyled,
  SpinnerWrapperStyled,
  VideoStyled,
  VideoWrapperStyled
} from './VideoStyles';

const screenMD = 800;

const Video = ({ isActive, link }) => {
  const { width } = useWindowDimensions();
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [video, setVideo] = useState(videoRef?.current);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = e => {
    e.stopPropagation();
    setIsPlaying(true);
    video?.play();
  };

  useEffect(() => {
    if (!video) setVideo(videoRef.current);
    if (isActive && isLoaded && width > screenMD) {
      video?.play();
    }
    if (!isActive) {
      video?.pause();

      setTimeout(() => {
        setIsPlaying(false);
      }, 500);
    }
  }, [video, isActive, isLoaded, width]);

  return (
    <>
      <VideoWrapperStyled isLoaded={isLoaded}>
        <VideoStyled
          loop
          onCanPlayThrough={() => setIsLoaded(true)}
          onWaiting={() => setIsLoaded(false)}
          ref={videoRef}
        >
          <source src={link} />
        </VideoStyled>
        {!isPlaying && width < screenMD && isLoaded ? (
          <PlayButtonWrapperStyled onClick={handlePlay}>
            <PlayButtonIcon />
          </PlayButtonWrapperStyled>
        ) : null}

        {!isLoaded ? (
          <SpinnerWrapperStyled>
            <Spinner />
          </SpinnerWrapperStyled>
        ) : null}
      </VideoWrapperStyled>
    </>
  );
};

export default Video;
