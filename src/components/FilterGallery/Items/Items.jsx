import React, { useEffect, useState, useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/globalContext';
import { artworkItems, searchParam } from '../../../constants/artworks';
import { curationItems } from '../../../constants/curations';
import { Heading } from '../../global/utils';
import {
  CardImageStyled,
  CardStyled,
  CardTitleContainerStyled,
  CardTitleStyled,
  ContainerStyled
} from './ItemsStyles';

const Items = () => {
  const { isCurationsPage } = useContext(GlobalContext);

  const items = isCurationsPage ? curationItems : artworkItems;

  const [renderItems, setRenderItems] = useState(items);
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const [searchParams] = useSearchParams();

  const getFilteredItems = filters => {
    const filteredItems = items.filter(item => {
      if (item.tags.some(tag => filters.includes(tag))) {
        return item;
      }
      return null;
    });

    return filteredItems;
  };

  useEffect(() => {
    setTimeout(() => {
      setPageIsLoaded(true);
    }, [2000]);
  }, []);

  useEffect(() => {
    const selectedFilters = searchParams.getAll(searchParam);

    if (selectedFilters.length) {
      return setRenderItems(getFilteredItems(selectedFilters));
    }
    setRenderItems(items);
  }, [searchParams]);

  return !renderItems.length ? (
    <Heading size="8rem" as="h1">
      No item matches your filters :(
    </Heading>
  ) : (
    <ContainerStyled
      isCurationsPage={isCurationsPage}
      pageIsLoaded={pageIsLoaded}
    >
      {renderItems.map(({ id, imageSrc, caption }) => (
        <Link to={`${caption}`} key={id}>
          <CardStyled>
            <CardImageStyled src={imageSrc} alt="" />
            <CardTitleContainerStyled>
              <CardTitleStyled>{caption}</CardTitleStyled>
            </CardTitleContainerStyled>
          </CardStyled>
        </Link>
      ))}
    </ContainerStyled>
  );
};

export default Items;
