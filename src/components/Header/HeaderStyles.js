import styled from 'styled-components';

export const MainWrapperStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
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
`;

export const ItemStyled = styled.li`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;
