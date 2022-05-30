import styled from 'styled-components';
import {
  CenterWrapperStyled,
  TextStyled as Text
} from '../../../components/global/utils';

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

    @media only screen and (max-width: 1255px) {
      font-size: 8.5rem;
    }

    @media only screen and (max-width: 1065px) {
      font-size: 7.7rem;
    }

    @media only screen and (max-width: 900px) {
      font-size: 7rem;
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
