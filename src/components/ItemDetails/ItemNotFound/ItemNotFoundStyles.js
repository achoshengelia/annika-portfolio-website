import styled from 'styled-components';
import { CenterWrapperStyled } from '../../global/utils';

export const ContainerStyled = styled(CenterWrapperStyled)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10rem;
  user-select: none;
  font-size: 2.5rem;

  & a {
    padding: 2rem;
    font-size: 1.8rem;
    background-color: rgba(0, 0, 0, 0);
    text-decoration: underline;
    cursor: pointer;
    transition: transform 0.1s ease;

    @media (hover: hover) {
      &:hover {
        color: ${props => props.theme.colors.other.purple};
        transform: scale(1.02);
      }
    }
  }
`;
