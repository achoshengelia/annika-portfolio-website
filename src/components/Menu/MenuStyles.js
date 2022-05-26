import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from '../global/utils';

export const MainWrapperStyled = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10;
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

export const MenuStyled = styled(motion.li)`
  font-size: 8rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.theme.colors.other.purple};
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
