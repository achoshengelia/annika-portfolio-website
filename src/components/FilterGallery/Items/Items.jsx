import React, { useEffect, useState, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/globalContext';
import { artworkItems, searchParam } from '../../../constants/artworks';
import { curationItems } from '../../../constants/curations';
import { Heading } from '../../global/utils';
import { Spinner } from '../../global/icons';
import {
  CardImageStyled,
  CardStyled,
  CardTitleContainerStyled,
  CardTitleStyled,
  ContainerStyled
} from './ItemsStyles';

const Item = ({ item: { imageSrc, caption }, pageIsLoaded }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <CardStyled
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: pageIsLoaded ? 0 : 0.6,
          duration: 0.5,
          ease: 'easeIn'
        }
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }}
    >
      <CardImageStyled
        src={imageSrc}
        alt={caption}
        onLoad={() => setImageIsLoaded(true)}
        imageIsLoaded={imageIsLoaded}
      />
      {!imageIsLoaded ? (
        <Spinner />
      ) : (
        <CardTitleContainerStyled>
          <CardTitleStyled>{caption}</CardTitleStyled>
        </CardTitleContainerStyled>
      )}
    </CardStyled>
  );
};

const Items = () => {
  const { isCurationsPage } = useContext(GlobalContext);

  const items = isCurationsPage ? curationItems : artworkItems;

  const [renderItems, setRenderItems] = useState(items);
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      setPageIsLoaded(true);
    }, [2000]);
  }, []);

  useEffect(() => {
    const selectedFilters = searchParams.getAll(searchParam);
    const getFilteredItems = filters => {
      const filteredItems = items.filter(item => {
        if (item.tags.some(tag => filters.includes(tag))) {
          return item;
        }
        return null;
      });

      return filteredItems;
    };

    if (selectedFilters.length) {
      return setRenderItems(getFilteredItems(selectedFilters));
    }
    setRenderItems(items);
  }, [items, searchParams]);

  return !renderItems.length ? (
    <ContainerStyled>
      <Heading as="h1" size="2rem">
        No item matches your filters :(
      </Heading>
    </ContainerStyled>
  ) : (
    <ContainerStyled
      isCurationsPage={isCurationsPage}
      pageIsLoaded={pageIsLoaded}
      isGrid
    >
      {renderItems.map(item => (
        <Link to={`${item.caption}`} key={item.id}>
          <Item item={item} pageIsLoaded={pageIsLoaded} />
        </Link>
      ))}
    </ContainerStyled>
  );
};

export default Items;
