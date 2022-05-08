import styled from 'styled-components';
import { TextStyled as Text } from '../../../global/utils';

export const ContainerStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${props => props.theme.colors.primary.main};
  z-index: 1;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Text} {
    max-width: 85rem;
  }
`;
