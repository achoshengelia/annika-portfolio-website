import styled from 'styled-components';
import { CenterWrapperStyled } from '../../global/utils';

export const MoreButtonStyled = styled.button`
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.35rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.1rem;
  }
`;

export const ContainerStyled = styled.footer`
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;

  ${CenterWrapperStyled} {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: auto;
    width: 100%;
    z-index: 2;
    border-top: 1px solid ${props => props.theme.colors.secondary.main};
    border-bottom: 1px solid ${props => props.theme.colors.secondary.main};
    padding: 1.4rem 2.5rem;
    background-color: ${props => props.theme.colors.primary.main};
  }
`;
