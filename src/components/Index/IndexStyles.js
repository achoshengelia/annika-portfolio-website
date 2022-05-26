import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SlideDown } from '../../animations';
import { CenterWrapperStyled, HeadingStyled as Heading } from '../global/utils';

export const HeaderWrapperStyled = styled(motion.header)`
  & > ${Heading} {
    animation: ${SlideDown} 0.5s ease-in;

    @media ${props => props.theme.breakpoints.md} {
      font-size: 6rem;
    }
  }
`;

export const ContainerStyled = styled(CenterWrapperStyled)`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
