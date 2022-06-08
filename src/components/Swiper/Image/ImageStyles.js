import styled from 'styled-components';

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImageStyled = styled.img`
  display: ${({ isLoaded }) => (isLoaded ? 'block' : 'none')} !important;
`;
