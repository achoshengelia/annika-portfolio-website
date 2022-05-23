import styled from 'styled-components';
import {
  HeadingStyled as Heading,
  TextStyled as Text
} from '../../global/utils';

export const ContainerStyled = styled.section`
  margin-top: 5rem;

  & > * {
    margin-top: 5rem;

    &:first-child {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 450px) {
    & h1 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 370px) {
    & h1 {
      font-size: 1.9rem;
    }

    & p {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 330px) {
    & h1 {
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
