import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterItems, searchParam } from '../../../../constants/main';
import { CloseIcon } from '../../../global/icons';
import { CenterWrapperStyled, LineBreakStyled } from '../../../global/utils';
import { ContainerStyled, FilterItemStyled } from './FiltersStyles';

const Filters = () => {
  const [isActive, setIsActive] = useState(['all']);
  const [searchParams, setSearchParams] = useSearchParams();

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

  useEffect(() => {
    const selectedFilters = searchParams.getAll(searchParam);

    if (selectedFilters.length) {
      return setIsActive([...selectedFilters]);
    }
    setIsActive('all');
  }, [searchParams]);

  return (
    <ContainerStyled>
      <LineBreakStyled />
      <CenterWrapperStyled>
        {filterItems.map(item => (
          <FilterItemStyled
            key={item}
            isActive={isActive.includes(item)}
            onClick={() => handleSetFilter(item)}
          >
            {item}
            {isActive.includes(item) && item !== 'all' ? (
              <CloseIcon size="1.3rem" />
            ) : null}
          </FilterItemStyled>
        ))}
      </CenterWrapperStyled>
      <LineBreakStyled />
    </ContainerStyled>
  );
};

export default Filters;
