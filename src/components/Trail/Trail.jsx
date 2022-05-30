import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import { mix, distance, wrap } from '@popmotion/popcorn';
import { center, powerOut4, generateSize, useAnimationLoop } from './utils';
import { ContainerStyled, PlaceholderStyled } from './TrailStyles';
import { landingGallery } from '../../constants/landing-page';

const ImagePlaceholder = ({ position, link }) => {
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
        duration: 0.8,
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
};

const Trail = ({ distanceThreshold = 140 }) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 }
  }).current;

  const imagePositions = useRef([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
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
          ...generateSize(),
          zIndex: imageIndex
        }
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });

  return (
    <ContainerStyled
      onMouseMove={e => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
    >
      {landingGallery.map((link, i) => (
        <ImagePlaceholder
          position={imagePositions.current[i]}
          link={link}
          key={link + i}
        />
      ))}
    </ContainerStyled>
  );
};

export default Trail;
