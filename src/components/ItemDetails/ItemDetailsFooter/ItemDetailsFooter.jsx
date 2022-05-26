import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { CenterWrapperStyled, Text } from '../../global/utils';
import { ContainerStyled, MoreButtonStyled } from './ItemDetailsFooterStyles';
import MoreInfo from './MoreInfo/MoreInfo';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const ItemDetailsFooter = ({ itemDetails, isCurationPage }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => setShowMore(prevState => !prevState);

  const { width } = useWindowDimensions();

  return (
    <>
      <ContainerStyled
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            duration: 0.3,
            ease: 'easeIn'
          }
        }}
        exit={{
          opacity: 0,
          y: 30,
          transition: {
            duration: 0.4,
            ease: 'easeOut'
          }
        }}
      >
        <CenterWrapperStyled>
          <Text isUppercase>
            <Link to={isCurationPage ? '/curation' : '/design-artworks'}>
              ←{' '}
            </Link>{' '}
            {itemDetails?.caption}
          </Text>

          {width > 950 ? <Text>{itemDetails?.curation}</Text> : null}
          <MoreButtonStyled onClick={handleToggleShowMore}>
            <Text isUppercase>{showMore ? 'Back' : 'Info'}</Text>
          </MoreButtonStyled>
        </CenterWrapperStyled>
      </ContainerStyled>

      {createPortal(
        <AnimatePresence>
          {showMore ? <MoreInfo moreInfo={itemDetails.moreInfo} /> : null}
        </AnimatePresence>,
        document.getElementById('modal')
      )}
    </>
  );
};

export default ItemDetailsFooter;
