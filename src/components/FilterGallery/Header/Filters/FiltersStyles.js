import styled from 'styled-components';
import { CloseIcon } from '../../../global/icons';
import { CenterWrapperStyled } from '../../../global/utils';

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

export const ContainerStyled = styled.ul`
  ${CenterWrapperStyled} {
    display: flex;
    justify-content: ${props =>
      props.isCurationsPage ? 'flex-start' : 'space-between'};
    gap: 4rem;
    margin: 2.5rem 0;
    flex-wrap: wrap;

    @media ${props => props.theme.breakpoints.md} {
      margin: 1.5rem 0;
      gap: 3.5rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      margin: 1.5rem 0;
      gap: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media ${props => props.theme.breakpoints.xs} {
    }
  }
`;
