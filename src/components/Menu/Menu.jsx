import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../constants/menu';
import { GlobalContext } from '../../context/globalContext';
import { CenterWrapperStyled } from '../global/utils';
import { MainWrapperStyled, MenuListStyled, MenuStyled } from './MenuStyles';

const Menu = () => {
  const { handleToggleShowMenu } = useContext(GlobalContext);

  return (
    <MainWrapperStyled>
      <CenterWrapperStyled as="nav">
        <MenuListStyled>
          {menuItems.map(({ id, value, link }) => (
            <MenuStyled key={id} onClick={handleToggleShowMenu}>
              <Link to={link}>{value}</Link>
            </MenuStyled>
          ))}
        </MenuListStyled>
      </CenterWrapperStyled>
    </MainWrapperStyled>
  );
};

export default Menu;
