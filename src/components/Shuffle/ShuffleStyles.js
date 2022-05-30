import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pxToEm } from '../../helpers';
import { CenterWrapperStyled, HeadingStyled as Heading } from '../global/utils';

export const MotionHeading = motion(Heading);

export const ImageStyled = styled.img`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  inset: 0;
  z-index: 99999;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

export const ContainerStyled = styled(CenterWrapperStyled)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;

  & > ${Heading} {
    opacity: 0.1;
    line-height: 12rem;
    margin-top: auto;

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
