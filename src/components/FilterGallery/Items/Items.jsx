import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../../../context/globalContext';
import { artworkItems, searchParam } from '../../../constants/artworks';
import { curationItems } from '../../../constants/curations';
import { CenterWrapperStyled, Heading } from '../../global/utils';
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

  return (
    <ContainerStyled
      isCurationsPage={isCurationsPage}
      pageIsLoaded={pageIsLoaded}
    >
      {!renderItems.length ? (
        <Heading size="8rem" as="h1">
          No item matches your filters :(
        </Heading>
      ) : (
        <CenterWrapperStyled>
          {renderItems.map(({ id, imageSrc, caption }) => (
            <CardStyled key={id}>
              <CardImageStyled src={imageSrc} />
              <CardTitleContainerStyled>
                <CardTitleStyled>{caption}</CardTitleStyled>
              </CardTitleContainerStyled>
            </CardStyled>
          ))}
        </CenterWrapperStyled>
      )}
    </ContainerStyled>
  );
};

export default Items;
