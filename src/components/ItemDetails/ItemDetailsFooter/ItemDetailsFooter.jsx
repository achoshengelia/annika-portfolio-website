import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../global/utils';
import { ContainerStyled, MoreButtonStyled } from './ItemDetailsFooterStyles';
import MoreInfo from './MoreInfo/MoreInfo';

const ItemDetailsFooter = ({ itemDetails }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => setShowMore(prevState => !prevState);

  return (
    <>
      <ContainerStyled>
        <Text size="1.6rem" isUppercase>
          {itemDetails?.caption}
        </Text>
        <Text size="1.6rem">{itemDetails?.curation}</Text>
        <MoreButtonStyled onClick={handleToggleShowMore}>
          {showMore ? 'Back' : 'More'}
        </MoreButtonStyled>
      </ContainerStyled>

      {showMore
        ? createPortal(
            <MoreInfo moreInfo={itemDetails.moreInfo} />,
            document.getElementById('modal')
          )
        : null}
    </>
  );
};

export default ItemDetailsFooter;
