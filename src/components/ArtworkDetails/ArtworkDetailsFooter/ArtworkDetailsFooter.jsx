import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../global/utils';
import {
  ContainerStyled,
  MoreButtonStyled
} from './ArtworkDetailsFooterStyles';
import MoreInfo from './MoreInfo/MoreInfo';

const ArtworkDetailsFooter = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => setShowMore(prevState => !prevState);

  return (
    <>
      <ContainerStyled>
        <Text size="1.6rem" isUppercase>
          extrasober
        </Text>
        <Text size="1.6rem">Curation | Co-management | 2021</Text>
        <MoreButtonStyled onClick={handleToggleShowMore}>
          {showMore ? 'Back' : 'More'}
        </MoreButtonStyled>
      </ContainerStyled>
      {showMore
        ? createPortal(<MoreInfo />, document.getElementById('modal'))
        : null}
    </>
  );
};

export default ArtworkDetailsFooter;
