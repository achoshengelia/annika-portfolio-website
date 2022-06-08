import styled from 'styled-components';
import { Spinning } from '../../animations';

export const PlayButtonIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 485 485"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M413.974 71.026C368.171 25.225 307.274 0 242.5 0S116.829 25.225 71.026 71.026C25.225 116.829 0 177.726 0 242.5s25.225 125.671 71.026 171.474C116.829 459.775 177.726 485 242.5 485s125.671-25.225 171.474-71.026C459.775 368.171 485 307.274 485 242.5s-25.225-125.671-71.026-171.474zM242.5 455C125.327 455 30 359.673 30 242.5S125.327 30 242.5 30 455 125.327 455 242.5 359.673 455 242.5 455z" />
    <path d="M181.062 336.575 343.938 242.5l-162.876-94.075z" />
  </svg>
);

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
  margin: 0 auto;
`;
