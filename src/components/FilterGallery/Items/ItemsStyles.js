import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pxToEm } from '../../../helpers';
import { HeadingStyled as Heading } from '../../global/utils';

export const CardTitleStyled = styled.figcaption`
  margin: auto;
  color: ${props => props.theme.colors.other.white};
  opacity: 1;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 4rem;

  @media only screen and (max-width: ${pxToEm(1150)}) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: ${pxToEm(950)}) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: ${pxToEm(700)}) {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${pxToEm(600)}) {
    font-size: 3rem;
  }

  @media only screen and (max-width: ${pxToEm(460)}) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: ${pxToEm(380)}) {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${pxToEm(330)}) {
    font-size: 1.8rem;
  }
`;

export const CardTitleContainerStyled = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.background.transparent};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in;

  @supports not (inset: 0) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const CardImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in;
  display: ${({ imageIsLoaded }) => (!imageIsLoaded ? 'none' : 'block')};
`;

export const CardStyled = styled(motion.figure)`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.08);
`;

export const ContainerStyled = styled.section`
  padding-top: 3rem;
  display: ${({ isGrid }) => (isGrid ? 'grid' : 'block')};
  grid-template-columns: ${props =>
    props.isCurationsPage ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  gap: 2rem;

  @media only screen and (max-width: ${pxToEm(1100)}) {
    grid-template-columns: ${props =>
      props.isCurationsPage ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  }

  @media only screen and (max-width: ${pxToEm(870)}) {
    grid-template-columns: ${props =>
      props.isCurationsPage ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
  }

  @media only screen and (max-width: ${pxToEm(620)}) {
    grid-template-columns: repeat(1, 1fr);
  }

  ${Heading} {
    width: 100%;
    min-height: 30rem;
    text-transform: none;
    display: grid;
    place-content: center;
  }

  ${CardStyled} {
    height: ${props => (props.isCurationsPage ? '30rem' : '48rem')};
    position: relative;
    cursor: pointer;
    overflow: hidden;
    animation-delay: ${({ pageIsLoaded }) => (pageIsLoaded ? '0s' : '0.6s')};

    @media (hover: hover) {
      &:hover {
        ${CardTitleContainerStyled} {
          opacity: 1;
        }

        ${CardImageStyled} {
          transform: scale(1.1);
        }
      }
    }

    @media only screen and (max-width: ${pxToEm(870)}) {
      height: ${props => (props.isCurationsPage ? '50rem' : '60rem')};
    }

    @media only screen and (max-width: ${pxToEm(770)}) {
      height: ${props => (props.isCurationsPage ? '45rem' : '45rem')};
    }

    @media only screen and (max-width: ${pxToEm(620)}) {
      height: ${props => (props.isCurationsPage ? '40rem' : '70rem')};
    }

    @media only screen and (max-width: ${pxToEm(441)}) {
      height: ${props => (props.isCurationsPage ? '30rem' : '55rem')};
    }

    @media only screen and (max-width: ${pxToEm(382)}) {
      height: ${props => (props.isCurationsPage ? '22rem' : '45rem')};
    }
  }
`;
