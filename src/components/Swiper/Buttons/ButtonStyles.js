import styled from 'styled-components';
import Next from '../../../assets/icons/next.png';
import Prev from '../../../assets/icons/prev.png';

export const ContainerStyled = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: ${({ prev }) => (!prev ? '0' : null)};
  left: ${({ prev }) => (prev ? '0' : null)};

  cursor: ${({ prev, isSmallDevice }) =>
    isSmallDevice ? null : prev ? `url(${Prev}), auto` : `url(${Next}), auto`};
  z-index: 10;
  height: 80%;
  width: 50%;

  & > img {
    cursor: pointer;
    margin: ${({ prev }) => (prev ? 'auto auto auto 0' : 'auto 0 auto auto')};
    max-width: 5rem;
  }
`;
