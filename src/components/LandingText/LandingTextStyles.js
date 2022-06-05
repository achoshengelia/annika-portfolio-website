import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pxToEm } from '../../helpers';

export const ContainerStyled = styled(motion.p)`
  position: relative;
  width: 100%;
  margin: 10rem auto 0 auto;
  max-width: 145rem;
  height: 100%;
  font-size: 10rem;

  & > a {
    position: relative;
    z-index: 20;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
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

  @media ${props => props.theme.breakpoints.md} {
    font-size: 5rem;
    margin-top: 9rem;
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
`;
