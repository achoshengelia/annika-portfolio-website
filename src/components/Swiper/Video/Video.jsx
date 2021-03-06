import React, { useState, useRef, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../context/globalContext';
import { isMobileDevice } from '../../../helpers';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Spinner } from '../../global/icons';
import {
  SpinnerWrapperStyled,
  VideoStyled,
  VideoWrapperStyled
} from './VideoStyles';

const screenMD = 800;

const Video = ({ isActive, link }) => {
  const { showMenu } = useContext(GlobalContext);
  const { width } = useWindowDimensions();
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [video, setVideo] = useState(videoRef?.current);

  const handleLoadedMetaData = () => {
    if (width < screenMD && isMobileDevice()) {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (!video) setVideo(videoRef.current);
    if (isActive && isLoaded && !showMenu) {
      video?.play();
    }
    if (!isActive || showMenu) {
      video?.pause();
    }
  }, [video, isActive, isLoaded, width, showMenu]);

  return (
    <>
      <VideoWrapperStyled isLoaded={isLoaded}>
        <VideoStyled
          loop
          onLoadedMetadata={handleLoadedMetaData}
          onCanPlayThrough={() => setIsLoaded(true)}
          onWaiting={() => setIsLoaded(false)}
          ref={videoRef}
          playsInline
        >
          <source src={link} />
        </VideoStyled>

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
