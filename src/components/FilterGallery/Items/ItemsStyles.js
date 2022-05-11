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
`;

export const CardStyled = styled.figure`
  opacity: 0;
  animation: ${PopIn} 0.6s forwards;
`;

export const ContainerStyled = styled.section`
  padding-top: 3rem;
  display: grid;
  grid-template-columns: ${props =>
    props.isCurationsPage ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  gap: 2rem;

  @media ${props => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.sm} {
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

    @media ${props => props.theme.breakpoints.md} {
      height: 60rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      height: 70rem;
    }
  }
`;

export const ContainterErrorStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;
