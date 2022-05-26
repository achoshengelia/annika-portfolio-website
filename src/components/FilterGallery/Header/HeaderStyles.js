import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pxToEm } from '../../../helpers';
import { HeadingStyled as Heading } from '../../global/utils';

export const ContainerStyled = styled(motion.header)`
  ${Heading} {
    padding: 5rem 0;
    white-space: normal;

    @media only screen and (max-width: ${pxToEm(870)}) {
      font-size: 6.9rem;
    }

    @media only screen and (max-width: ${pxToEm(770)}) {
      font-size: 5.9rem;
    }

    @media only screen and (max-width: ${pxToEm(672)}) {
      font-size: 5.3rem;
    }

    @media only screen and (max-width: ${pxToEm(620)}) {
      font-size: 7.3rem;
    }

    @media only screen and (max-width: ${pxToEm(510)}) {
      font-size: 6.3rem;
    }

    @media only screen and (max-width: ${pxToEm(441)}) {
      font-size: 6rem;
    }

    @media only screen and (max-width: ${pxToEm(382)}) {
      font-size: 4.9rem;
    }

    @media only screen and (max-width: ${pxToEm(310)}) {
      font-size: 3.9rem;
    }
  }
`;
