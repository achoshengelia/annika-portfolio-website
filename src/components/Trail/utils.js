import { useEffect } from 'react';
import sync, { cancelSync } from 'framesync';
import { createExpoIn, reversed } from '@popmotion/easing';

// Version of Greensock's Quad ease out
export const powerOut4 = reversed(createExpoIn(4));

// Hook to use an animation loop
export const useAnimationLoop = callback => {
  useEffect(() => {
    sync.update(callback, true);
    return () => cancelSync.update(callback);
  }, [callback]);
};

// Center images using transforms
export const center = (_, generated) => `translate(-50%, -50%) ${generated}`;

// Emulate slightly different image ratios by randomly generating size
const generateNumber = (base, range) => {
  return base - range / 2 + Math.round(Math.random() * range);
};
export const generateSize = () => ({
  height: generateNumber(312, 70),
  width: generateNumber(250, 50)
});
