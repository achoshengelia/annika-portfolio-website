import React from 'react';
import { footerItems } from '../../constants/footer';
import { CenterWrapperStyled } from '../global/utils';
import {
  ItemStyled,
  ListItemsStyled,
  ItemSocialsStyled,
  MainWrapperStyled,
  LinkStyled
} from './FooterStyles';

const Footer = () => {
  return (
    <MainWrapperStyled
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3,
          duration: 0.3,
          ease: 'easeIn'
        }
      }}
      exit={{
        opacity: 0,
        y: 30,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }}
    >
      <CenterWrapperStyled as="nav" aria-label="footer navigation">
        <ListItemsStyled>
          <ItemStyled>
            © Annika Terwey.
            <LinkStyled to="/imprint"> Imprint</LinkStyled>
          </ItemStyled>
          <ListItemsStyled>
            {footerItems.map(({ id, value, link }) => (
              <ItemSocialsStyled key={id}>
                <a href={link} target="_blank" rel="noreferrer">
                  {value}
                </a>
              </ItemSocialsStyled>
            ))}
          </ListItemsStyled>
        </ListItemsStyled>
      </CenterWrapperStyled>
    </MainWrapperStyled>
  );
};

export default Footer;
