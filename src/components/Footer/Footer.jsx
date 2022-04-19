import React from 'react';
import { Link } from 'react-router-dom';
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
            <ItemSocialsStyled>
              <a
                href="https://twitter.com/AnnikaTerwey"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </ItemSocialsStyled>
            <ItemSocialsStyled>
              <a
                href="https://vimeo.com/annikaterwey"
                target="_blank"
                rel="noreferrer"
              >
                Vimeo
              </a>
            </ItemSocialsStyled>
            <ItemSocialsStyled>
              <a
                href="https://www.instagram.com/dunkleecken/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </ItemSocialsStyled>
          </ListItemsStyled>
        </ListItemsStyled>
      </CenterWrapperStyled>
    </MainWrapperStyled>
  );
};

export default Footer;
