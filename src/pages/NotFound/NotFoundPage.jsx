import React, { useContext, useEffect } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import { GlobalContext } from '../../context/globalContext';
import { ContainerStyled } from './NotFoundPageStyles';

const NotFoundPage = () => {
  const { setIsMaxHeight } = useContext(GlobalContext);

  useEffect(() => {
    setIsMaxHeight(true);

    return () => setIsMaxHeight(false);
  }, [setIsMaxHeight]);

  return (
    <ContainerStyled>
      <NotFound />
    </ContainerStyled>
  );
};

export default NotFoundPage;
