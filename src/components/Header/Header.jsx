import React from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapperStyled } from '../global/utils';
import { ItemStyled, ListItemsStyled, MainWrapperStyled } from './HeaderStyles';

const Header = ({ handleToggleShowMenu, showMenu }) => {
  return (
    <MainWrapperStyled>
      <CenterWrapperStyled as="nav">
        <ListItemsStyled>
          <ItemStyled>
            {!showMenu && <Link to="/">ANNIKA TERWEY</Link>}
          </ItemStyled>

          {!showMenu && (
            <ItemStyled>
              <Link to="/menu" onClick={handleToggleShowMenu}>
                MENU
              </Link>
            </ItemStyled>
          )}
          {showMenu && (
            <ItemStyled variant="back">
              <Link to="/menu" onClick={handleToggleShowMenu}>
                BACK
              </Link>
            </ItemStyled>
          )}
        </ListItemsStyled>
      </CenterWrapperStyled>
    </MainWrapperStyled>
  );
};

export default Header;
