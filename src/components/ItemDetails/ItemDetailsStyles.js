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
    max-width: ${props => (props.isCurationPage ? '85rem' : '35rem')};
    height: 50rem;

    @media ${props => props.theme.breakpoints.lg} {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const ContainerDetailsStyled = styled.div`
  position: fixed;
  bottom: 3%;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
`;
