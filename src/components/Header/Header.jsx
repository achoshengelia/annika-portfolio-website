import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/globalContext';
import { CenterWrapperStyled } from '../global/utils';
import Menu from '../Menu/Menu';
import { ItemStyled, ListItemsStyled, MainWrapperStyled } from './HeaderStyles';

const Header = () => {
  const { showMenu, handleToggleShowMenu } = useContext(GlobalContext);

  return (
    <>
      <MainWrapperStyled>
        <CenterWrapperStyled as="nav">
          <ListItemsStyled>
            <ItemStyled>
              {!showMenu ? <Link to="/">ANNIKA TERWEY</Link> : null}
            </ItemStyled>
            <ItemStyled onClick={handleToggleShowMenu}>
              {showMenu ? 'BACK' : 'MENU'}
            </ItemStyled>
          </ListItemsStyled>
        </CenterWrapperStyled>
      </MainWrapperStyled>

      {showMenu
        ? createPortal(<Menu />, document.getElementById('root'))
        : null}
    </>
  );
};

export default Header;
