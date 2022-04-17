import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapperStyled } from '../global/utils';
import { ItemStyled, ListItemsStyled, MainWrapperStyled } from './HeaderStyles';

const Header = () => {
  return (
    <MainWrapperStyled>
      <CenterWrapperStyled as="nav">
        <ListItemsStyled>
          <ItemStyled>
            <Link to="/">ANNIKA TERWEY</Link>
          </ItemStyled>
          <ItemStyled>MENU</ItemStyled>
        </ListItemsStyled>
      </CenterWrapperStyled>
    </MainWrapperStyled>
  );
};

export default Header;
