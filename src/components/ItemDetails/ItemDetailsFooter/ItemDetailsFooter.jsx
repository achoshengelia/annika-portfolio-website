import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { CenterWrapperStyled, Text } from '../../global/utils';
import { ContainerStyled, MoreButtonStyled } from './ItemDetailsFooterStyles';
import MoreInfo from './MoreInfo/MoreInfo';

const ItemDetailsFooter = ({ itemDetails }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => setShowMore(prevState => !prevState);

  return (
    <>
      <ContainerStyled>
        <CenterWrapperStyled>
          <Text isUppercase>{itemDetails?.caption}</Text>
          {/* when width of screen is sm or smaller, the jsx below should not be shown */}
          <Text>{itemDetails?.curation}</Text>
          <MoreButtonStyled onClick={handleToggleShowMore}>
            {showMore ? 'Back' : 'More'}
          </MoreButtonStyled>
        </CenterWrapperStyled>
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
