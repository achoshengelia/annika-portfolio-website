import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CenterWrapperStyled } from '../global/utils';
import {
  MainWrapperStyled,
  MenuListStyled,
  MenuStyled,
  LanguageListStyled,
  LanguageStyled
} from './MenuStyles';

const Menu = ({ handleToggleShowMenu }) => {
  return (
    <CenterWrapperStyled as="nav">
      <MainWrapperStyled>
        <MenuListStyled>
          <MenuStyled>
            <Link to="/design-artworks" onClick={handleToggleShowMenu}>
              DESIGN & ARTWORKS
            </Link>
          </MenuStyled>
          <MenuStyled>
            <Link to="/curation" onClick={handleToggleShowMenu}>
              CURATION
            </Link>
          </MenuStyled>
          <MenuStyled>
            <Link to="/index" onClick={handleToggleShowMenu}>
              INDEX
            </Link>
          </MenuStyled>
          <MenuStyled>
            <Link to="/about" onClick={handleToggleShowMenu}>
              ABOUT
            </Link>
          </MenuStyled>
          {/* <LanguageListStyled>
            <LanguageStyled onClick={handleToggleShowMenu}>
              ENGLISH
            </LanguageStyled>
            <LanguageStyled> / </LanguageStyled>
            <LanguageStyled onClick={handleToggleShowMenu}>
              DEUTSCH
            </LanguageStyled>
          </LanguageListStyled> */}
        </MenuListStyled>
      </MainWrapperStyled>
    </CenterWrapperStyled>
  );
};

export default Menu;
