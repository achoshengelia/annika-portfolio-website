import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled } from '../../global/utils';
import { pxToEm } from '../../../helpers';

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
    padding: 1.4rem 0rem 1.4rem 0.5rem;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: ${pxToEm(360)}) {
    font-size: 1.2rem;
    padding: 1.4rem 0rem 1.4rem 0.2rem;
  }
`;

export const ContainerStyled = styled(motion.footer)`
  padding: 0 2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  z-index: 10;

  ${CenterWrapperStyled} {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: auto;
    width: 100%;
    z-index: 100;
    border-top: 1px solid ${props => props.theme.colors.secondary.main};
    border-bottom: 1px solid ${props => props.theme.colors.secondary.main};
    padding: 1.4rem 2.5rem;
    background-color: ${props => props.theme.colors.primary.main};

    & > * {
      &:nth-child(2) {
        @media only screen and (max-width: ${pxToEm(950)}) {
          visibility: hidden;
        }
      }

      &:first-child,
      :last-child {
        position: absolute;
      }

      &:first-child {
        left: 2.5rem;

        @media ${props => props.theme.breakpoints.sm} {
          left: 1rem;
        }
      }

      &:last-child {
        right: 2.5rem;

        @media ${props => props.theme.breakpoints.sm} {
          right: 1rem;
        }
      }
    }

    & p {
      font-size: 1.6rem;

      @media ${props => props.theme.breakpoints.lg} {
        font-size: 1.6rem;
      }

      @media ${props => props.theme.breakpoints.md} {
        font-size: 1.35rem;
      }
    }

    @media ${props => props.theme.breakpoints.sm} {
      font-size: 1.4rem;
      padding: 0em 0rem;

      & p {
        font-size: 1.4rem;
        padding: 1.4rem 0rem 1.4rem 0rem;
      }
    }

    @media only screen and (max-width: ${pxToEm(360)}) {
      font-size: 1.2rem;

      & p {
        font-size: 1.2rem;
        padding: 1.4rem 0.2rem 1.4rem 0rem;
      }
    }
  }
`;
