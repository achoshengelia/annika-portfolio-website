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

  ${CloseIcon} {
    display: inline-block;
    margin-bottom: 1.3rem;
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
  }
`;
