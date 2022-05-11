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
  /* padding-top: auto;
  padding-bottom: auto; */
  overflow-y: auto;
  padding-top: 15vh;
  padding-bottom: 15vh;

  ${Text} {
    max-width: 85rem;
    margin: auto 1.8rem;
  }
`;

export const ContainerBackgroundStyled = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${props => props.theme.colors.primary.main};
  z-index: 1;
  opacity: 0.8;
`;
