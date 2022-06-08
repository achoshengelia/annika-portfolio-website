import React, { useState } from 'react';
import { Spinner } from '../../global/icons';
import { ImageStyled, SpinnerWrapperStyled } from './ImageStyles';

const Image = ({ link }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <ImageStyled
        src={link}
        alt=""
        onLoad={() => setIsLoaded(true)}
        isLoaded={isLoaded}
      />

      {!isLoaded ? (
        <SpinnerWrapperStyled>
          <Spinner />
        </SpinnerWrapperStyled>
      ) : null}
    </>
  );
};

export default Image;
