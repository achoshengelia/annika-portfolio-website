import React, { memo, useContext, useEffect, useState } from 'react';
import { landingGalleryMobile } from '../../constants/landing-page';
import { GlobalContext } from '../../context/globalContext';
import { getRandomColour } from '../../helpers';
import {
  ContainerStyled,
  ImageFallbackStyled,
  ImageStyled,
  ImagesWrapperStyled,
  MotionHeading
} from './ShuffleStyles';

const Image = memo(({ link, isVisible }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <ImageStyled
        src={link}
        alt=""
        isVisible={isVisible && isLoaded}
        onLoad={() => setIsLoaded(true)}
        draggable="false"
        unselectable="on"
      />

      {isVisible && !isLoaded ? (
        <ImageFallbackStyled colour={getRandomColour()} />
      ) : null}
    </>
  );
});

const Shuffle = ({ children }) => {
  const { setIsShufflePage } = useContext(GlobalContext);
  const [imageIndex, setImageIndex] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setIsShufflePage(true);

    return () => {
      setIsShufflePage(false);
    };
  }, [setIsShufflePage]);

  const handleMouseDown = () => {
    setTimer(
      setInterval(() => {
        setImageIndex(prevState =>
          prevState === landingGalleryMobile.length - 1 || prevState === null
            ? 0
            : prevState + 1
        );
      }, 250)
    );
  };

  const handleMouseUp = () => {
    clearInterval(timer);
    setImageIndex(null);
    setTimer(null);
  };

  const isVisible = i => i === imageIndex;

  return (
    <ContainerStyled
      onClick={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.8
        }
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8
        }
      }}
    >
      {children}
      <MotionHeading
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.1,
          transition: {
            duration: 0.8,
            delay: 0.8
          }
        }}
        exit={{
          opacity: 0,
          y: 50,
          transition: {
            duration: 0.5
          }
        }}
        as="h1"
        isUppercase
        size="10rem"
      >
        keep <br />
        screen
        <br /> pressed
      </MotionHeading>

      <ImagesWrapperStyled isVisible={timer || imageIndex}>
        {landingGalleryMobile.map((link, i) => (
          <Image key={link} link={link} isVisible={isVisible(i)} />
        ))}
      </ImagesWrapperStyled>
    </ContainerStyled>
  );
};

export default Shuffle;
