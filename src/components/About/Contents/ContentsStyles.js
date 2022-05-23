import styled from 'styled-components';
import {
  HeadingStyled as Heading,
  TextStyled as Text
} from '../../global/utils';

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
    @media only screen and (max-width: 900px) {
      font-size: 2.4rem;
    }

    @media only screen and (max-width: 450px) {
      font-size: 2.2rem;
    }

    @media only screen and (max-width: 370px) {
      font-size: 2rem;
    }

    @media only screen and (max-width: 330px) {
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

export const FriendsWrapperStyled = styled.div``;

export const ExhibitionsWrapperStyled = styled.div`
  ${Heading} {
    margin-bottom: 3rem;
  }

  font-size: 2.2rem;
`;

export const ContactWrapperStyled = styled.div``;

export const GridWrapperStyled = styled.div`
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
      margin-bottom: 3rem;

      @media only screen and (max-width: 900px) {
        font-size: 2.4rem;
      }

      @media only screen and (max-width: 450px) {
        font-size: 2.2rem;
      }

      @media only screen and (max-width: 370px) {
        font-size: 2rem;
      }

      @media only screen and (max-width: 330px) {
        font-size: 1.9rem;
      }
    }

    &
      ${Text},
      ${IDoListItemStyled},
      ${ExhibitionListItemStyled},
      ${FriendsListItemStyled} {
      @media only screen and (max-width: 900px) {
        font-size: 2rem;
      }

      @media only screen and (max-width: 450px) {
        font-size: 1.8rem;
      }

      @media only screen and (max-width: 370px) {
        font-size: 1.6rem;
      }

      @media only screen and (max-width: 330px) {
        font-size: 1.45rem;
      }
    }
  }
`;
