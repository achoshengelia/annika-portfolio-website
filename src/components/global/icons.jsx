import styled from 'styled-components';
import { Spinning } from '../../animations';

export const CloseIcon = styled.i`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: ${props => (props.size ? props.size : '2rem')};
    width: 2px;
    background-color: ${props => props.theme.colors.other.black};
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const Spinner = styled.i`
  display: block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.other.black};
  border-bottom-color: transparent;
  position: relative;
  animation: ${Spinning} 1s linear infinite;
`;
