import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.section)`
  margin-top: 5rem;

  & h2 {
    white-space: normal;
  }

  & > * {
    margin-top: 5rem;

    &:first-child {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 520px) {
    & h2 {
      font-size: 2rem;
      white-space: normal;
    }

    & p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 370px) {
    & h2 {
      font-size: 1.9rem;
    }

    & p {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 330px) {
    & h2 {
      font-size: 1.8rem;
    }

    & p {
      font-size: 1.6rem;
    }
  }
`;

export const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
