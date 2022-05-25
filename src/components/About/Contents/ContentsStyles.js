import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  HeadingStyled as Heading,
  TextStyled as Text
} from '../../global/utils';
import { pxToEm } from '../../../helpers';

export const FriendsListItemStyled = styled.li`
  font-size: 2.2rem;
`;

export const FriendsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const ExhibitionListItemStyled = styled.li`
  font-size: 2.2rem;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const ExhibitionListStyled = styled.ul``;

export const IDoListItemStyled = styled.li`
  margin-top: 1.5rem;
  display: list-item;
  list-style: disc;
  margin-left: 1.2em;
  font-size: 2.2rem;
`;

export const IDoListStyled = styled.ul``;

export const IDoWrapperStyled = styled.div`
  & > ${Heading} {
    @media only screen and (max-width: ${pxToEm(900)}) {
      font-size: 2.4rem;
    }

    @media only screen and (max-width: ${pxToEm(450)}) {
      font-size: 2.2rem;
    }

    @media only screen and (max-width: ${pxToEm(370)}) {
      font-size: 2rem;
    }

    @media only screen and (max-width: ${pxToEm(330)}) {
      font-size: 1.9rem;
    }
  }
`;

export const AboutMeWrapperStyled = styled.div`
  ${Text} {
    margin-top: 2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-bottom: 5rem;
  }
`;

export const FriendsWrapperStyled = styled(motion.div)``;

export const ExhibitionsWrapperStyled = styled(motion.div)`
  ${Heading} {
    margin-bottom: 3rem;
  }

  font-size: 2.2rem;
`;

export const ContactWrapperStyled = styled(motion.div)`
  max-height: ${props => (props.$isFormOpen ? '100rem' : '15rem')};
  overflow: hidden;
  transition: all 0.8s ease;

  @media only screen and (max-width: ${pxToEm(370)}) {
    max-height: ${props => (props.$isFormOpen ? '100rem' : '11.5rem')};
  }
`;

export const GridWrapperStyled = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 8rem;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 0rem;
  }
`;

export const ContainerStyled = styled.section`
  margin-top: 5rem;

  & > * {
    margin-top: 5rem;

    &:first-child {
      margin-top: 0;
    }

    & > ${Heading} {
      margin-bottom: 4rem;

      @media only screen and (max-width: ${pxToEm(900)}) {
        font-size: 2.4rem;
      }

      @media only screen and (max-width: ${pxToEm(450)}) {
        font-size: 2.2rem;
      }

      @media only screen and (max-width: ${pxToEm(370)}) {
        font-size: 2rem;
      }

      @media only screen and (max-width: ${pxToEm(330)}) {
        font-size: 1.9rem;
      }
    }

    &
      ${Text},
      ${IDoListItemStyled},
      ${ExhibitionListItemStyled},
      ${FriendsListItemStyled} {
      @media only screen and (max-width: ${pxToEm(900)}) {
        font-size: 2rem;
      }

      @media only screen and (max-width: ${pxToEm(450)}) {
        font-size: 1.8rem;
      }

      @media only screen and (max-width: ${pxToEm(370)}) {
        font-size: 1.6rem;
      }

      @media only screen and (max-width: ${pxToEm(330)}) {
        font-size: 1.45rem;
      }
    }
  }
`;

export const ArrowWrapperStyled = styled.span`
  font-family: ${props => props.theme.fonts.main};
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(30%);
  }
`;

export const ButtonStyled = styled.button`
  background: none;
  font-size: 5rem;
  text-align: left;
  cursor: pointer;
  width: max-content;
  margin-bottom: 8rem;

  &:hover {
    ${ArrowWrapperStyled} {
      transform: translateX(25%);
    }
  }

  @media only screen and (max-width: ${pxToEm(900)}) {
    font-size: 4.2rem;
  }

  @media only screen and (max-width: ${pxToEm(550)}) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    font-size: 3rem;
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: ${pxToEm(330)}) {
    font-size: 2.2rem;
    margin-bottom: 5rem;
  }
`;

export const ButtonWrapperStyled = styled.div`
  padding-left: 1rem;

  @media only screen and (max-width: ${pxToEm(450)}) {
    padding-left: 0.4rem;
  }
`;
