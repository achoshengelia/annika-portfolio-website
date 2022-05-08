import styled from 'styled-components';

export const MoreButtonStyled = styled.button`
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
`;

export const ContainerStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
  z-index: 2;
  border-top: 1px solid ${props => props.theme.colors.secondary.main};
  border-bottom: 1px solid ${props => props.theme.colors.secondary.main};
  padding: 1.4rem 3rem;
`;
