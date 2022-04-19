import styled from 'styled-components';
import { CenterWrapperStyled } from '../global/utils';

export const MainWrapperStyled = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: ${props => props.theme.colors.primary.main};
  ${CenterWrapperStyled} {
    height: 100%;
  }
`;

export const MenuListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 8rem;
  gap: 2.5rem;

  @media ${props => props.theme.breakpoints.lg} {
    margin-left: 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 0rem;
    gap: 4rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    gap: 3rem;
  }
`;

export const MenuStyled = styled.li`
  font-size: 8rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  text-transform: uppercase;

  &:hover {
    transition: all 100ms ease-in-out;
    color: #a863ff;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 7rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 6.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 5rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 4.5rem;
  }
`;

export const LanguageListStyled = styled.ul`
  padding-top: 1rem;
  display: flex;
`;

export const LanguageStyled = styled.li`
  font-size: 3rem;
  padding-right: 2rem;
  cursor: pointer;
`;
