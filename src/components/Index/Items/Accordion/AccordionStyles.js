import styled from 'styled-components';
import { TextStyled as Text } from '../../../global/utils';

export const ImageStyled = styled.img`
  max-height: 50rem;
  object-fit: contain;
`;

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0.5fr;
  gap: 1rem;
  padding: 2.5rem;
  cursor: pointer;
  margin-bottom: 2rem;

  ${Text} {
    &:last-child {
      text-align: end;
    }
  }

  @media only screen and (max-width: 1112px) {
    grid-template-columns: repeat(2, 1fr) 0.6fr;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 755px) {
    grid-template-columns: repeat(1, 1fr) 0.6fr;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 455px) {
    font-size: 1.4rem;
    padding: 2.5rem 2rem;
  }

  @media only screen and (max-width: 390px) {
    font-size: 1.3rem;
    padding: 2.5rem 1rem;
  }
`;

export const ContainerStyled = styled.li`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '60rem' : '7rem')};
  transition: all 0.5s ease;
  margin-bottom: ${({ isOpen }) => (isOpen ? '4rem' : '0')};

  ${ImageStyled} {
    margin: 0 auto;
  }
`;
