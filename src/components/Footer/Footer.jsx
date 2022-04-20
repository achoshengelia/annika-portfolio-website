import React from 'react';
import { Link } from 'react-router-dom';
import { footerItems } from '../../constants/footer';
import { CenterWrapperStyled } from '../global/utils';
import {
  ItemStyled,
  ListItemsStyled,
  ItemSocialsStyled,
  MainWrapperStyled
} from './FooterStyles';

const Footer = () => {
  return (
    <MainWrapperStyled>
      <CenterWrapperStyled as="nav">
        <ListItemsStyled>
          <ItemStyled>
            © Annika Terwey.
            <Link to="/imprint"> Imprint</Link>
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
