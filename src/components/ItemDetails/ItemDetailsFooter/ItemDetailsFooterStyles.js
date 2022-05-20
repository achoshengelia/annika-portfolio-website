import styled from 'styled-components';
import { CenterWrapperStyled } from '../../global/utils';

export const MoreButtonStyled = styled.button`
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 1.6rem;
  }

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
  width: 100%;
  z-index: 10;

  ${CenterWrapperStyled} {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: auto;
    width: 100%;
    z-index: 100;
    border-top: 1px solid ${props => props.theme.colors.secondary.main};
    border-bottom: 1px solid ${props => props.theme.colors.secondary.main};
    padding: 1.4rem 2.5rem;
    background-color: ${props => props.theme.colors.primary.main};

    @media ${props => props.theme.breakpoints.md} {
      font-size: 1.35rem;
      padding: 1.4rem 1.5rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      font-size: 1.2rem;
      padding: 1.4rem 1rem;
    }

    @media ${props => props.theme.breakpoints.xs} {
      font-size: 1.1rem;
      padding: 1.4rem 0.8rem;
    }
  }
`;
