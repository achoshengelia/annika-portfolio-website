import styled from 'styled-components';
import { CloseIcon } from '../../../global/icons';
import { CenterWrapperStyled } from '../../../global/utils';

export const RowGapStyled = styled.li`
  display: none;

  @supports not (inset: 0) {
    display: block;

    margin: 2.5rem 0;

    @media ${props => props.theme.breakpoints.md} {
      margin: 1.5rem 0;
    }
  }
`;

export const FilterItemStyled = styled.li`
  font-size: 2rem;
  color: ${props =>
    props.isActive
      ? props.theme.colors.background.light
      : props.theme.colors.text.light};
  cursor: pointer;
  background-color: ${props =>
    props.isActive
      ? props.theme.colors.other.purple
      : props.theme.colors.background.light};
  padding: 0.8rem 1.2rem 0.8rem 1.2rem;
  border-radius: 10rem;
  transition: background-color 0.1s ease;
  display: grid;
  place-content: center;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.8rem;
    white-space: nowrap;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.4rem;
  }

  & ${CloseIcon} {
    display: inline-block;
    margin-bottom: 1.3rem;
    transform: translateX(-0.5rem);

    @media ${props => props.theme.breakpoints.md} {
      margin-bottom: 1.2rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      margin-bottom: 1.1rem;
    }

    @media ${props => props.theme.breakpoints.xs} {
      margin-bottom: 1.1rem;
    }
  }
`;

export const ContainerStyled = styled.div`
  & ${CenterWrapperStyled} {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin: 4.5rem auto 1rem auto;
    padding-left: 0;

    @media ${props => props.theme.breakpoints.md} {
      margin: 3.5rem 0 0, 0rem 0;
      gap: 1.2rem;
      ::-webkit-scrollbar {
        display: none;
      }
      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    @media ${props => props.theme.breakpoints.sm} {
      margin: 3.5rem 0 0 0;
      flex-wrap: nowrap;
      overflow-x: scroll;
    }

    @supports not (inset: 0) {
      & > * + * {
        margin-left: 2rem;
      }
    }
  }
`;
