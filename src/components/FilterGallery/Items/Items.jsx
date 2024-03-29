import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo
} from 'react';
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

const Item = ({ item: { imageSrc, caption, alt }, pageIsLoaded }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <CardStyled
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: pageIsLoaded ? 0 : 0.6,
          duration: 0.4,
          ease: 'linear'
        }
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.3,
          ease: 'easeOut'
        }
      }}
    >
      <CardImageStyled
        src={imageSrc}
        alt={alt}
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
  const getFilteredItems = useCallback(
    filters => {
      const filteredItems = items.filter(item => {
        if (item.tags.some(tag => filters.includes(tag))) {
          return item;
        }
        return null;
      });

      return filteredItems;
    },
    [items]
  );
  const initialItems = useMemo(
    () => getFilteredItems(['all']),
    [getFilteredItems]
  );

  const [renderItems, setRenderItems] = useState(initialItems);
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  console.log({ renderItems });

  useEffect(() => {
    setTimeout(() => {
      setPageIsLoaded(true);
    }, [2000]);
  }, []);

  useEffect(() => {
    const selectedFilters = searchParams.getAll(searchParam);

    if (selectedFilters.length) {
      setRenderItems(getFilteredItems(selectedFilters));
    } else {
      setRenderItems(initialItems);
    }
  }, [items, searchParams, initialItems, getFilteredItems]);

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
        <Link to={`${item.id}`} key={item.id}>
          <Item item={item} pageIsLoaded={pageIsLoaded} />
        </Link>
      ))}
    </ContainerStyled>
  );
};

export default Items;
