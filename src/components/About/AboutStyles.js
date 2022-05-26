import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CenterWrapperStyled, HeadingStyled as Heading } from '../global/utils';

export const HeaderWrapperStyled = styled(motion.header)`
  & > ${Heading} {
    @media ${props => props.theme.breakpoints.md} {
      font-size: 6rem;
    }
  }
`;

export const ContainerStyled = styled(CenterWrapperStyled)`
  padding-top: 4rem;
`;
