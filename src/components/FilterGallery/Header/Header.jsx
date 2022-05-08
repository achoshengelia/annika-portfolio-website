import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/globalContext';
import { CenterWrapperStyled, Heading } from '../../global/utils';
import Filters from './Filters/Filters';
import { ContainerStyled } from './HeaderStyles';

const Header = () => {
  const { isCurationsPage } = useContext(GlobalContext);

  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <Heading as="h1" isUppercase>
          {isCurationsPage ? 'curation' : 'design & artworks'}
        </Heading>
        <Filters isCurationsPage={isCurationsPage} />
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Header;
