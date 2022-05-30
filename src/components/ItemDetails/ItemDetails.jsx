import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';
import { getArtworkDetails } from '../../constants/artwork-details';
import { getCurationDetails } from '../../constants/curation-details';
import { GlobalContext } from '../../context/globalContext';
import Swiper from '../Swiper/Swiper';
import ItemDetailsFooter from './ItemDetailsFooter/ItemDetailsFooter';
import { ContainerStyled } from './ItemDetailsStyles';
import ItemNotFound from './ItemNotFound/ItemNotFound';

const ItemDetails = ({ isCurationPage }) => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState({});
  const { setIsItemDetailsPage } = useContext(GlobalContext);

  useEffect(() => {
    setIsItemDetailsPage(true);

    setItemDetails(
      isCurationPage ? getCurationDetails(id) : getArtworkDetails(id)
    );

    return () => {
      setIsItemDetailsPage(false);
    };
  }, [isCurationPage, id, setIsItemDetailsPage]);

  return (
    <ContainerStyled isCurationPage={isCurationPage}>
      {itemDetails !== undefined ? (
        <>
          <Swiper gallery={itemDetails?.gallery} />

          {itemDetails?.gallery?.length
            ? createPortal(
                <ItemDetailsFooter
                  itemDetails={itemDetails}
                  isCurationPage={isCurationPage}
                />,
                document.getElementById('root')
              )
            : null}
        </>
      ) : (
        <ItemNotFound isCurationPage={isCurationPage} />
      )}
    </ContainerStyled>
  );
};

export default ItemDetails;
