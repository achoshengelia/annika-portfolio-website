import React, { useState, useRef, useEffect } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Spinner } from '../../global/icons';
import {
  PlayButtonStyled,
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

  const handlePlay = () => {
    setIsPlaying(true);
    video?.play();
  };

  useEffect(() => {
    if (!video) setVideo(videoRef.current);
    if (isActive && isLoaded && width > screenMD) {
      video?.play();
    }

    return () => {
      video?.pause();

      setIsPlaying(false);
    };
  }, [video, isActive, isLoaded, width]);

  console.log(isLoaded);

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
        {!isPlaying && width < screenMD ? (
          <PlayButtonStyled onClick={handlePlay} />
        ) : null}
      </VideoWrapperStyled>

      {!isLoaded ? (
        <SpinnerWrapperStyled>
          <Spinner />
        </SpinnerWrapperStyled>
      ) : null}
    </>
  );
};

export default Video;
