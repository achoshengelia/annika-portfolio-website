import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { getArtworkDetails } from '../../constants/artwork-details';
import { getCurationDetails } from '../../constants/curation-details';
import { GlobalContext } from '../../context/globalContext';
import { usePrevState } from '../global/utils';
import Swiper from '../Swiper/Swiper';
import ItemDetailsFooter from './ItemDetailsFooter/ItemDetailsFooter';
import ItemNotFound from './ItemNotFound/ItemNotFound';
import { ContainerStyled } from './ItemDetailsStyles';

const ItemDetails = ({ isCurationPage }) => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const prevPathname = usePrevState(pathname);
  const { setIsMaxHeight } = useContext(GlobalContext);
  const [itemDetails, setItemDetails] = useState({});
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setShowFooter(false);
    }
  }, [pathname, prevPathname]);

  useEffect(() => {
    setIsMaxHeight(true);
    setShowFooter(true);

    setItemDetails(
      isCurationPage ? getCurationDetails(id) : getArtworkDetails(id)
    );

    return () => {
      setIsMaxHeight(false);
    };
  }, [isCurationPage, id, setIsMaxHeight]);

  return (
    <ContainerStyled
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, delay: 0.6, ease: 'linear' }
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      isCurationPage={isCurationPage}
    >
      {itemDetails !== undefined ? (
        <>
          <Swiper gallery={itemDetails?.gallery} />

          {createPortal(
            <AnimatePresence>
              {itemDetails?.gallery?.length && showFooter ? (
                <ItemDetailsFooter
                  itemDetails={itemDetails}
                  isCurationPage={isCurationPage}
                />
              ) : null}
            </AnimatePresence>,
            document.getElementById('root')
          )}
        </>
      ) : (
        <ItemNotFound isCurationPage={isCurationPage} />
      )}
    </ContainerStyled>
  );
};

export default ItemDetails;
