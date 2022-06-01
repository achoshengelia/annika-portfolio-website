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

    @media ${props => props.theme.breakpoints.sm} {
      /* margin: 2rem 0; */
    }
  }
`;

export const FilterItemStyled = styled.li`
  font-size: 2rem;
  color: ${props =>
    props.isActive
      ? props.theme.colors.text.main
      : props.theme.colors.text.light};
  cursor: pointer;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.8rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.4rem;
  }

  ${CloseIcon} {
    display: inline-block;
    margin-bottom: 1.3rem;

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
  ${CenterWrapperStyled} {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    margin: 2.5rem auto;

    @media ${props => props.theme.breakpoints.md} {
      margin: 1.5rem 0;
      gap: 3.5rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      margin: 1.5rem 0;
      gap: 3rem;
    }

    @supports not (inset: 0) {
      /* justify-content: ${({ isCurationsPage }) =>
        isCurationsPage ? null : 'space-evenly'}; */

      & > * + * {
        margin-left: 2rem;
      }
    }
  }
`;
