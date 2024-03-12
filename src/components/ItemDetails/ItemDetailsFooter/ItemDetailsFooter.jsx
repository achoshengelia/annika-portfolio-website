import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CenterWrapperStyled, Text } from '../../global/utils';
import { ContainerStyled, MoreButtonStyled } from './ItemDetailsFooterStyles';
import MoreInfo from './MoreInfo/MoreInfo';

const ItemDetailsFooter = ({ itemDetails, isCurationPage }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => setShowMore(prevState => !prevState);

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
            duration: 0.5,
            ease: 'easeOut'
          }
        }}
        draggable="false"
        hasCuration={itemDetails?.curation}
      >
        <CenterWrapperStyled>
          <Text isUppercase as="p">
            <Link to={isCurationPage ? '/curation' : '/projects'}>
              ← {itemDetails?.caption}
            </Link>
          </Text>
          <Text as="p">{itemDetails?.curation}</Text>
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
