import styled from 'styled-components';
import {
  HeadingStyled as Heading,
  TextStyled as Text
} from '../../global/utils';

export const ExhibitionListItemStyled = styled.li`
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
`;

export const IDoListStyled = styled.ul``;

export const AboutMeWrapperStyled = styled.div`
  ${Text} {
    margin-top: 2rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const FriendsWrapperStyled = styled.div`
  ${Heading} {
    margin-bottom: 3rem;
  }
`;

export const ExhibitionsWrapperStyled = styled.div`
  ${Heading} {
    margin-bottom: 3rem;
  }
`;

export const ContactWrapperStyled = styled.div``;

export const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 8rem;
`;

export const ContainerStyled = styled.section`
  font-size: 2.2rem;
  margin-top: 5rem;

  & > * {
    margin-top: 5rem;

    &:first-child {
      margin-top: 0;
    }
  }
`;
