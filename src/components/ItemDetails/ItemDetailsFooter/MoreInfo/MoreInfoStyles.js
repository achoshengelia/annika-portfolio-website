import styled from 'styled-components';
import { TextStyled as Text } from '../../../global/utils';

export const ContainerStyled = styled.div`
  position: fixed;
  inset: 0;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  overflow-y: auto;
  padding-top: 8%;
  max-height: 90%;
  background-color: ${props => props.theme.colors.primary.transparent};

  ${Text} {
    max-width: 85rem;
    margin: auto 1.8rem;
  }
`;
