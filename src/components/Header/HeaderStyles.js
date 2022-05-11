import styled from 'styled-components';

export const MainWrapperStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 12;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(230, 229, 227, 1)
  );
  padding-bottom: 2.2rem;
`;

export const ListItemsStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  min-height: 5rem;
  padding-top: 2rem;
`;

export const ItemStyled = styled.li`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  opacity: ${props => (props.variant === 'back' ? '0.50' : '1')};
  transition: all 115ms ease-in-out;

  &:hover {
    opacity: 0.75;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.4rem;
  }
`;
