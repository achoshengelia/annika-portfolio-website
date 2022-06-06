import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/globalContext';
import { Heading } from '../../global/utils';
import Filters from './Filters/Filters';
import { ContainerStyled } from './HeaderStyles';

const Header = () => {
  const { isCurationsPage } = useContext(GlobalContext);

  return (
    <ContainerStyled
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.3
        }
      }}
      exit={{
        opacity: 0,
        y: -50,
        transition: {
          duration: 0.3
        }
      }}
    >
      <Heading as="h1" isUppercase>
        {isCurationsPage ? 'curation' : 'design & artworks'}
      </Heading>
      <Filters isCurationsPage={isCurationsPage} />
    </ContainerStyled>
  );
};

export default Header;
