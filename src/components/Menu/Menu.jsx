import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../constants/menu';
import { GlobalContext } from '../../context/globalContext';
import { CenterWrapperStyled } from '../global/utils';
import { MainWrapperStyled, MenuListStyled, MenuStyled } from './MenuStyles';

const mainVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.13
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1
    }
  }
};

const childVariants = {
  initial: {
    y: 50,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

const Menu = () => {
  const { handleToggleShowMenu } = useContext(GlobalContext);

  return (
    <MainWrapperStyled
      initial="initial"
      animate="animate"
      exit="exit"
      variants={mainVariants}
    >
      <CenterWrapperStyled as="nav">
        <MenuListStyled>
          {menuItems.map(({ id, value, link }) => (
            <MenuStyled
              key={id}
              onClick={handleToggleShowMenu}
              variants={childVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Link to={link}>{value}</Link>
            </MenuStyled>
          ))}
        </MenuListStyled>
      </CenterWrapperStyled>
    </MainWrapperStyled>
  );
};

export default Menu;
