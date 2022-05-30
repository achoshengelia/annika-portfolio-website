import { keyframes } from 'styled-components';

export const turnPurple = keyframes`
   to {
      background-color: #9933FF;
   }
`;

export const Spinning = keyframes`
   to {
    transform: rotate(1turn);
  }
`;

export const LightUp = keyframes`
   0% {opacity: 0}
   100% {opacity: 1}
`;

export const PopIn = keyframes`
   0% { opacity: 0; transform: scale(0.9); }
   100% { opacity: 1; transform: scale(1); }
`;

export const SlideDown = keyframes`
   0% {
      opacity: 0;
      transform: translateY(-20%);
   }
   
   100% {
      opacity: 1;
      transform: translateY(0);
   }	
`;
