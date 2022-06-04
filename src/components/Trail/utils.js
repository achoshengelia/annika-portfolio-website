import { useEffect } from 'react';
import sync, { cancelSync } from 'framesync';
import { createExpoIn, reversed } from '@popmotion/easing';

export const powerOut4 = reversed(createExpoIn(4));

export const useAnimationLoop = callback => {
  useEffect(() => {
    sync.update(callback, true);
    return () => cancelSync.update(callback);
  }, [callback]);
};

export const center = (_, generated) => `translate(-50%, -50%) ${generated}`;
