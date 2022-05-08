import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArtworkDetails } from '../../constants/artwork-details';
import { getCurationDetails } from '../../constants/curation-details';
import Swiper from '../Swiper/Swiper';
import ItemDetailsFooter from './ItemDetailsFooter/ItemDetailsFooter';
import { ContainerStyled } from './ItemDetailsStyles';

const ItemDetails = ({ isCurationPage }) => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    setItemDetails(
      isCurationPage ? getCurationDetails(id) : getArtworkDetails(id)
    );
  }, []);

  return (
    <ContainerStyled isCurationPage={isCurationPage}>
      {itemDetails ? (
        <>
          <Swiper gallery={itemDetails?.gallery} />
          <ItemDetailsFooter itemDetails={itemDetails} />
        </>
      ) : (
        <div>Not Found!</div>
      )}
    </ContainerStyled>
  );
};

export default ItemDetails;
