import styled from 'styled-components';
import {
  CenterWrapperStyled,
  HeadingStyled as Heading,
  TextStyled as Text
} from '../../components/global/utils';
import { pxToEm } from '../../helpers';

export const ImageStyled = styled.img``;

export const ContainerStyled = styled(CenterWrapperStyled)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-size: 2.5rem;
  overflow-wrap: break-word;

  & ${Heading} {
    line-height: 10.5rem;
  }

  & ${Text} {
    line-height: 4.5rem;
  }

  & a {
    font-size: 1.8rem;
    background-color: rgba(0, 0, 0, 0);
    text-decoration: underline;
    cursor: pointer;
    transition: transform 0.1s ease;

    @media (hover: hover) {
      &:hover {
        color: ${props => props.theme.colors.other.purple};
        transform: scale(1.02);
      }
    }
  }

  & ${ImageStyled} {
    height: 30vh;
    margin: 2rem 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    & ${Heading} {
      font-size: 3.5rem;
      line-height: 7.5rem;
    }

    & ${Text} {
      font-size: 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & ${Heading} {
      font-size: 2.8rem;
    }

    & ${Text} {
      font-size: 1.8rem;
    }

    & a {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: ${pxToEm(462)}) {
    & ${Heading} {
      font-size: 2.2rem;
    }

    & ${Text} {
      font-size: 1.5rem;
    }

    & a {
      font-size: 1.4rem;
    }
  }
`;
