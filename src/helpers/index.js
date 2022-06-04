export const isMobileDevice = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }
  return false;
};

export const pxToEm = pixels => pixels / 16 + 'em';

export const getRandomColour = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
