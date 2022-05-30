import styled from 'styled-components';
import { pxToEm } from '../../helpers';
import { CenterWrapperStyled, TextStyled as Text } from '../global/utils';

export const ContainerStyled = styled(CenterWrapperStyled)`
  & > ${Text} {
    margin-top: 5rem;
    font-size: 10rem;

    & > a {
      text-decoration: underline;
      cursor: pointer;
      position: relative;
      width: 100%;
      z-index: 1;
    }

    @media only screen and (max-width: ${pxToEm(1280)}) {
      font-size: 8rem;
    }

    @media only screen and (max-width: ${pxToEm(1065)}) {
      font-size: 7.5rem;
    }

    @media only screen and (max-width: ${pxToEm(980)}) {
      font-size: 6.5rem;
    }

    @media only screen and (max-width: ${pxToEm(890)}) {
      font-size: 5.5rem;
    }

    @media only screen and (max-width: ${pxToEm(800)}) {
      font-size: 5rem;
    }

    @media only screen and (max-width: ${pxToEm(500)}) {
      font-size: 4rem;
    }

    @media only screen and (max-width: ${pxToEm(400)}) {
      font-size: 3.2rem;
    }

    @media only screen and (max-width: ${pxToEm(350)}) {
      font-size: 2.7rem;
    }
  }
`;
