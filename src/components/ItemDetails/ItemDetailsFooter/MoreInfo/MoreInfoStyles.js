import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextStyled as Text } from '../../../global/utils';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  inset: 0;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  overflow-y: auto;
  padding-top: 10%;
  max-height: 92%;
  background-color: ${props => props.theme.colors.primary.transparent};

  ${Text} {
    max-width: 85rem;
    margin: auto 1.8rem;
  }

  @media ${props => props.theme.breakpoints.lg} {
    padding-top: 13%;
    ${Text} {
      margin: auto 2.2rem;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    padding-top: 15%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding-top: 20%;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding-top: 25%;
  }
`;
