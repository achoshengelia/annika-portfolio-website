import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeadingStyled as Heading } from '../../global/utils';

export const ContainerStyled = styled(motion.header)`
  ${Heading} {
    padding: 5rem 0;
    white-space: normal;

    @media only screen and (max-width: 870px) {
      font-size: 6.9rem;
    }

    @media only screen and (max-width: 770px) {
      font-size: 5.9rem;
    }

    @media only screen and (max-width: 672px) {
      font-size: 5.3rem;
    }

    @media only screen and (max-width: 620px) {
      font-size: 7.3rem;
    }

    @media only screen and (max-width: 510px) {
      font-size: 6.3rem;
    }

    @media only screen and (max-width: 441px) {
      font-size: 6rem;
    }

    @media only screen and (max-width: 382px) {
      font-size: 4.9rem;
    }

    @media only screen and (max-width: 310px) {
      font-size: 3.9rem;
    }
  }
`;
