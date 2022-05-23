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
    <MainWrapperStyled>
      <CenterWrapperStyled as="nav">
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
