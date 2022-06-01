import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  artworkFilterItems,
  searchParam
} from '../../../../constants/artworks';
import { curationFilterItems } from '../../../../constants/curations';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { CloseIcon } from '../../../global/icons';
import { CenterWrapperStyled, LineBreakStyled } from '../../../global/utils';
import {
  ContainerStyled,
  FilterItemStyled,
  RowGapStyled
} from './FiltersStyles';

const Filters = props => {
  const { width } = useWindowDimensions();
  const [isActive, setIsActive] = useState(['all']);
  const [searchParams, setSearchParams] = useSearchParams();
  const { isCurationsPage } = props;

  const filterIsApplied = filter => {
    const allParams = searchParams.getAll(searchParam);
    if (allParams.includes(filter)) return true;
    return false;
  };

  const deleteFilter = filter => {
    const allParams = searchParams.getAll(searchParam);
    const filteredParams = allParams.filter(param => param !== filter);

    searchParams.delete(searchParam);
    setIsActive(filteredParams);
    if (filteredParams.length) {
      filteredParams.forEach(param => searchParams.append(searchParam, param));
    }
    setSearchParams(searchParams);
  };

  const handleSetFilter = value => {
    if (value === 'all') {
      setIsActive('all');

      searchParams.delete(searchParam);
      return setSearchParams(setSearchParams);
    }
    if (filterIsApplied(value)) {
      return deleteFilter(value);
    }

    searchParams.append(searchParam, value);
    setSearchParams(searchParams);
  };

  const renderItems = isCurationsPage
    ? curationFilterItems
    : artworkFilterItems;

  useEffect(() => {
    const selectedFilters = searchParams.getAll(searchParam);

    if (selectedFilters.length) {
      return setIsActive([...selectedFilters]);
    }
    setIsActive('all');
  }, [searchParams]);

  return (
    <ContainerStyled isCurationsPage={isCurationsPage}>
      <LineBreakStyled />
      <CenterWrapperStyled as="ul">
        {renderItems.map((item, i) => (
          <Fragment key={item}>
            {width < 1187 && i === 4 ? <RowGapStyled /> : null}

            {width < 674 && i === 6 ? <RowGapStyled /> : null}

            {width < 376 && i === 9 ? <RowGapStyled /> : null}
            <FilterItemStyled
              isActive={isActive.includes(item)}
              onClick={() => handleSetFilter(item)}
            >
              {item}
              {isActive.includes(item) && item !== 'all' ? (
                <CloseIcon size="1.3rem" />
              ) : null}
            </FilterItemStyled>
          </Fragment>
        ))}
      </CenterWrapperStyled>
      <LineBreakStyled />
    </ContainerStyled>
  );
};

export default Filters;
