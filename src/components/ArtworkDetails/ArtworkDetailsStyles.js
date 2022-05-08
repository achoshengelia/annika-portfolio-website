import styled from 'styled-components';
import { CenterWrapperStyled } from '../global/utils';
import { SwiperStyled as Swiper } from '../Swiper/SwiperStyles';

export const ContainerStyled = styled(CenterWrapperStyled)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Swiper} {
    margin: auto 0;
    max-width: 85rem;
    height: 50rem;

    @media ${props => props.theme.breakpoints.lg} {
      max-width: 100%;
      width: 100%;
    }
  }
`;
