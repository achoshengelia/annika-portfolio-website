import styled from 'styled-components';
import { TextStyled as Text } from '../../../global/utils';

export const ImageStyled = styled.img``;

export const TagsStyled = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0.5fr;
  gap: 2rem;
  padding: 2rem;
  cursor: pointer;
  margin-bottom: 2rem;

  ${Text} {
    &:last-child {
      text-align: end;
    }
  }
`;

export const ContainerStyled = styled.li`
  text-transform: capitalize;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? '60rem' : '7rem')};
  transition: height 0.5s ease;
  margin-bottom: ${({ isOpen }) => (isOpen ? '4rem' : '0')};

  ${ImageStyled} {
    margin: 0 auto;
  }
`;
