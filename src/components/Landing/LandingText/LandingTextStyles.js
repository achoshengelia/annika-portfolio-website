import styled from 'styled-components';
import { CenterWrapperStyled, TextStyled as Text } from '../../global/utils';

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

    @media only screen and (max-width: 1280px) {
      font-size: 8rem;
    }

    @media only screen and (max-width: 1065px) {
      font-size: 7.5rem;
    }

    @media only screen and (max-width: 980px) {
      font-size: 6.5rem;
    }

    @media only screen and (max-width: 890px) {
      font-size: 5.5rem;
    }

    @media only screen and (max-width: 800px) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 500px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 400px) {
      font-size: 3.2rem;
    }

    @media only screen and (max-width: 350px) {
      font-size: 2.7rem;
    }
  }
`;
