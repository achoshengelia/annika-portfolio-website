import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled, HeadingStyled as Heading } from '../global/utils';

export const HeaderWrapperStyled = styled(motion.header)``;

export const ContainerStyled = styled(CenterWrapperStyled)`
  padding: 4rem 2rem;

  & > ${Heading} {
    @media ${props => props.theme.breakpoints.md} {
      font-size: 6rem;
    }
  }
`;
