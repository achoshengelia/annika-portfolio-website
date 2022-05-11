import styled from 'styled-components';
import { CenterWrapperStyled } from '../global/utils';
import { SwiperStyled as Swiper } from '../Swiper/SwiperStyles';

export const ContainerStyled = styled(CenterWrapperStyled)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Swiper} {
    margin-top: 7rem;
    max-width: 50%;
    max-height: 80%;

    /* max-width: ${props => (props.isCurationPage ? '85rem' : '35rem')}; */
    /* height: 50rem; */
    /* max-height: 80%; */

    @media ${props => props.theme.breakpoints.lg} {
      max-width: 100%;
      width: 100%;
    }
  }
`;
