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
        <Text as="h5" isUppercase>
          {itemDetails?.caption}
        </Text>
        {/* when width of screen is sm or smaller, the jsx below should not be shown */}
        <Text as="h5">{itemDetails?.curation}</Text>
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
