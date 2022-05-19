import styled from 'styled-components';
import { CenterWrapperStyled } from '../global/utils';
import { SwiperStyled as Swiper } from '../Swiper/SwiperStyles';

export const ContainerStyled = styled(CenterWrapperStyled)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  ${Swiper} {
  }
`;
