import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/globalContext';
import { CenterWrapperStyled } from '../global/utils';
import Menu from '../Menu/Menu';
import { ItemStyled, ListItemsStyled, MainWrapperStyled } from './HeaderStyles';

const Header = () => {
  const { showMenu, handleToggleShowMenu, isShufflePage } =
    useContext(GlobalContext);

  return (
    <>
      <MainWrapperStyled isShufflePage={isShufflePage}>
        <CenterWrapperStyled as="nav" aria-label="header navigation">
          <ListItemsStyled>
            <ItemStyled>
              {!showMenu ? <Link to="/">ANNIKA TERWEY</Link> : null}
            </ItemStyled>
            <ItemStyled
              onClick={handleToggleShowMenu}
              variant={showMenu ? 'back' : ''}
            >
              {showMenu ? 'BACK' : 'MENU'}
            </ItemStyled>
          </ListItemsStyled>
        </CenterWrapperStyled>
      </MainWrapperStyled>

      {createPortal(
        <AnimatePresence exitBeforeEnter>
          {showMenu ? <Menu /> : null}
        </AnimatePresence>,
        document.getElementById('menu')
      )}
    </>
  );
};

export default Header;
