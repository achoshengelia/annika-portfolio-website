import styled from 'styled-components';

export const MainWrapperStyled = styled.header`
  height: 80vh;
  display: flex;
  align-items: center;
  padding-left: 4rem;

  @media ${props => props.theme.breakpoints.sm} {
    padding-left: 1vw;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding-left: 0rem;
  }
`;

export const MenuListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: right;
`;

export const MenuStyled = styled.li`
  font-size: 8rem;
  font-weight: 500;
  padding-bottom: 2.5rem;
  cursor: pointer;
  &:hover {
    transition: all 100ms ease-in-out;
    color: #a863ff;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }

  /* @media ${props => props.theme.breakpoints.m} {
    font-size: 6.5rem;
    padding-bottom: 3.5rem;
  } */

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 5.5rem;
    padding-bottom: 3.5rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 4.5rem;
    padding-bottom: 3.5rem;
  }
`;

export const LanguageListStyled = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
`;

export const LanguageStyled = styled.li`
  font-size: 3rem;
  padding-right: 2rem;
  cursor: pointer;
`;
