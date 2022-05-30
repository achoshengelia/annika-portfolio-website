import React, { useContext, useEffect, useState } from 'react';
import { landingGalleryMobile } from '../../constants/landing-page';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled, ImageStyled, MotionHeading } from './ShuffleStyles';

const Shuffle = () => {
  const { setIsShufflePage } = useContext(GlobalContext);
  const [imageIndex, setImageIndex] = useState(0);
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
          prevState === landingGalleryMobile.length - 1 ? 0 : prevState + 1
        );
      }, 120)
    );
  };

  const handleMouseUp = () => {
    clearInterval(timer);
    setImageIndex(0);
    setTimer(null);
  };

  return (
    <ContainerStyled
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
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

      <ImageStyled
        src={landingGalleryMobile[imageIndex]}
        alt=""
        isVisible={Boolean(timer)}
      />
    </ContainerStyled>
  );
};

export default Shuffle;
