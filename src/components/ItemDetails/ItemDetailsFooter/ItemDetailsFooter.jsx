import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { CenterWrapperStyled, Text } from '../../global/utils';
import { ContainerStyled, MoreButtonStyled } from './ItemDetailsFooterStyles';
import MoreInfo from './MoreInfo/MoreInfo';

const ItemDetailsFooter = ({ itemDetails }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => setShowMore(prevState => !prevState);

  const { width } = useWindowDimensions();

  return (
    <>
      <ContainerStyled>
        <CenterWrapperStyled>
          <Text isUppercase>{itemDetails?.caption}</Text>
          {width > 950 ? <Text>{itemDetails?.curation}</Text> : null}
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
