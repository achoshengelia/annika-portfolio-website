import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import { useAnimation } from 'framer-motion';
import { mix, distance, wrap } from '@popmotion/popcorn';
import { landingGallery } from '../../constants/landing-page';
import { center, powerOut4, useAnimationLoop } from './utils';
import { ContainerStyled, PlaceholderStyled } from './TrailStyles';

const ImagePlaceholder = memo(({ position, link }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;

    const { xOrigin, x, yOrigin, y } = position;

    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.85],
      transition: {
        duration: 0.6,
        ease: ['easeOut', powerOut4],
        times: [0, 0.7, 1]
      }
    });
  }, [position, controls]);

  const style = position ? position.style : {};

  return (
    <PlaceholderStyled
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      src={link}
      style={{ ...style }}
    />
  );
});

const Trail = ({ distanceThreshold = 120, children }) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 }
  }).current;

  const imagePositions = useRef([]);

  const [index, setIndex] = useState(0);

  const useAnimationCallback = useCallback(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1)
    };

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, landingGallery.length - 1, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          zIndex: imageIndex
        }
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  }, [distanceThreshold, index, mouseInfo]);

  useAnimationLoop(useAnimationCallback);

  return (
    <ContainerStyled
      onMouseMove={e => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
    >
      {children}
      {landingGallery.map((link, i) => (
        <ImagePlaceholder
          key={link + i}
          position={imagePositions.current[i]}
          link={link}
        />
      ))}
    </ContainerStyled>
  );
};

export default memo(Trail);
