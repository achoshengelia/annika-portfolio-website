import styled from 'styled-components';
import { SlideDown } from '../../../animations';
import { HeadingStyled as Heading } from '../../global/utils';

export const ContainerStyled = styled.header`
  animation: ${SlideDown} 0.5s ease-in;

  ${Heading} {
    padding: 5rem 0;
  }
`;
