import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pxToEm } from '../../helpers';
import { CenterWrapperStyled, HeadingStyled as Heading } from '../global/utils';

export const MotionHeading = motion(Heading);

export const ImagePlaceholderStyled = styled.div`
  position: absolute;
  inset: 0;
  z-index: ${({ isFallback }) => (isFallback ? '998' : '9999')};
  height: 100vh;
  width: 100vw;
  background-color: ${({ colour, theme }) =>
    colour ? colour : theme.colors.primary.main};

  @supports not (inset: 0) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ImageStyled = styled.img`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  inset: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  pointer-events: none;

  @supports not (inset: 0) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ContainerStyled = styled(motion(CenterWrapperStyled))`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.other.purple};

  & > ${Heading} {
    opacity: 0.1;
    line-height: 12rem;
    margin-top: auto;
    user-select: none;

    @media ${props => props.theme.breakpoints.sm} {
      font-size: 8rem;
      line-height: 10rem;
    }

    @media only screen and (max-width: ${pxToEm(420)}) {
      font-size: 6rem;
      line-height: 7.2rem;
    }

    @media ${props => props.theme.breakpoints.xs} {
      font-size: 5rem;
      line-height: 6rem;
    }
  }
`;
