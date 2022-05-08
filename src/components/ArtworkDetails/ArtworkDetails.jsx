import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swiper from '../Swiper/Swiper';
import { getArtworkDetails } from '../../constants/artwork-details';
import ArtworkDetailsFooter from './ArtworkDetailsFooter/ArtworkDetailsFooter';
import { ContainerStyled } from './ArtworkDetailsStyles';

const ArtworkDetails = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    setItemDetails(getArtworkDetails(id));
  }, []);

  return (
    <ContainerStyled>
      {itemDetails ? (
        <>
          <Swiper gallery={itemDetails?.gallery} />
          <ArtworkDetailsFooter itemDetails={itemDetails} />
        </>
      ) : (
        <div>Not Found!</div>
      )}
    </ContainerStyled>
  );
};

export default ArtworkDetails;
