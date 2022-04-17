import styled from 'styled-components';

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
