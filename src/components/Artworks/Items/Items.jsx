import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { artworkItems, searchParam } from '../../../constants/main';
import { CenterWrapperStyled } from '../../global/utils';
import {
  CardImageStyled,
  CardStyled,
  CardTitleContainerStyled,
  CardTitleStyled,
  ContainerStyled
} from './ItemsStyles';

const Items = () => {
  const [renderItems, setRenderItems] = useState(artworkItems);
  const [searchParams] = useSearchParams();

  const getFilteredItems = filters => {
    const filteredItems = artworkItems.filter(item => {
      if (item.tags.some(tag => filters.includes(tag))) {
        return item;
      }
      return null;
    });
    return filteredItems;
  };

  useEffect(() => {
    const selectedFilters = searchParams.getAll(searchParam);

    if (selectedFilters.length) {
      return setRenderItems(getFilteredItems(selectedFilters));
    }
    setRenderItems(artworkItems);
  }, [searchParams]);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        {renderItems.map(({ id, imageSrc, caption }) => (
          <CardStyled key={id}>
            <CardImageStyled src={imageSrc} alt="" />
            <CardTitleContainerStyled>
              <CardTitleStyled>{caption}</CardTitleStyled>
            </CardTitleContainerStyled>
          </CardStyled>
        ))}
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Items;
