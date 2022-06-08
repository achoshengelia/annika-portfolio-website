import styled from 'styled-components';
import { PlayButtonIcon } from '../../global/icons';

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PlayButtonStyled = styled(PlayButtonIcon)``;

export const VideoStyled = styled.video``;

export const VideoWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;

  & ${VideoStyled} {
    display: ${({ isLoaded }) => (isLoaded ? 'flex' : 'none')} !important;
    justify-content: center;
    align-items: center;
  }

  & ${PlayButtonStyled} {
    max-width: 5rem;
    position: absolute;
    background: transparent;
    z-index: 5555;
    cursor: pointer;
  }
`;
