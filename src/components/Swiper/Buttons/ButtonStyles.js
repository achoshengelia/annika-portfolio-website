import styled from 'styled-components';
import Next from '../../../assets/icons/next.png';
import Prev from '../../../assets/icons/prev.png';

export const ContainerStyled = styled.i`
  position: absolute;
  top: 0;
  right: ${({ prev }) => (!prev ? '0' : null)};
  left: ${({ prev }) => (prev ? '0' : null)};
  cursor: ${({ prev }) => (prev ? `url(${Prev}), auto` : `url(${Next}), auto`)};
  z-index: 10;
  height: 100%;
  width: 50%;
`;
