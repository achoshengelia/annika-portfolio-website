import styled from 'styled-components';
import { PopIn } from '../../../animations';
import { HeadingStyled as Heading } from '../../global/utils';

export const CardTitleStyled = styled.figcaption`
  margin: auto;
  color: ${props => props.theme.colors.other.white};
  opacity: 1;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 4rem;

  @media only screen and (max-width: 1150px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 950px) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 460px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 330px) {
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
`;

export const CardImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in;
  display: ${({ imageIsLoaded }) => (!imageIsLoaded ? 'none' : 'block')};
`;

export const CardStyled = styled.figure`
  opacity: 0;
  animation: ${PopIn} 0.6s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerStyled = styled.section`
  padding-top: 3rem;
  display: ${({ isGrid }) => (isGrid ? 'grid' : 'block')};
  grid-template-columns: ${props =>
    props.isCurationsPage ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  gap: 2rem;

  @media only screen and (max-width: 1100px) {
    //grid-template-columns: repeat(3, 1fr);
    grid-template-columns: ${props =>
      props.isCurationsPage ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  }

  @media screen and (max-width: 870px) {
    //grid-template-columns: repeat(2, 1fr);
    grid-template-columns: ${props =>
      props.isCurationsPage ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
  }

  @media screen and (max-width: 620px) {
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

    &:hover {
      ${CardTitleContainerStyled} {
        opacity: 1;
      }

      ${CardImageStyled} {
        transform: scale(1.1);
      }
    }

    @media screen and (max-width: 870px) {
      height: ${props => (props.isCurationsPage ? '50rem' : '60rem')};
    }

    @media screen and (max-width: 770px) {
      height: ${props => (props.isCurationsPage ? '45rem' : '45rem')};
    }

    @media screen and (max-width: 620px) {
      height: ${props => (props.isCurationsPage ? '40rem' : '70rem')};
    }

    @media screen and (max-width: 441px) {
      height: ${props => (props.isCurationsPage ? '30rem' : '55rem')};
    }

    @media screen and (max-width: 382px) {
      height: ${props => (props.isCurationsPage ? '22rem' : '45rem')};
    }
  }
`;
