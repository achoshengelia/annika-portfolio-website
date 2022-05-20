import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
    document.querySelector('html').style.height = '100%';
    document.querySelector('body').style.height = '100%';
    document.querySelector('#root').style.height = '100%';

    setItemDetails(
      isCurationPage ? getCurationDetails(id) : getArtworkDetails(id)
    );

    return () => {
      document.querySelector('html').removeAttribute('style');
      document.querySelector('body').removeAttribute('style');
      document.querySelector('#root').removeAttribute('style');
    };
  }, []);

  return (
    <>
      <ContainerStyled isCurationPage={isCurationPage}>
        {itemDetails ? (
          <>
            <Swiper gallery={itemDetails?.gallery} />
            {createPortal(
              <ItemDetailsFooter itemDetails={itemDetails} />,
              document.getElementById('root')
            )}
          </>
        ) : (
          <div>Not Found!</div>
        )}
      </ContainerStyled>
    </>
  );
};

export default ItemDetails;
