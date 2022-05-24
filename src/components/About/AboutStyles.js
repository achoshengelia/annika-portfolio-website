import styled from 'styled-components';
import { CenterWrapperStyled, HeadingStyled as Heading } from '../global/utils';

export const ContainerStyled = styled(CenterWrapperStyled)`
  padding: 4rem 2rem;
  padding-bottom: 0;

  & > ${Heading} {
    @media ${props => props.theme.breakpoints.md} {
      font-size: 6rem;
    }
  }

  & p {
    @media only screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }
`;
