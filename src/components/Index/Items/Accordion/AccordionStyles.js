import styled from 'styled-components';
import { TextStyled as Text } from '../../../global/utils';

export const ImageStyled = styled.img`
  max-height: 50rem;
  object-fit: cover;

  @media only screen and (max-width: 660px) {
    height: 42rem;
  }

  @media only screen and (max-width: 620px) {
    height: 38rem;
  }

  @media only screen and (max-width: 600px) {
    height: 36rem;
  }

  @media only screen and (max-width: 565px) {
    height: 34rem;
  }

  @media only screen and (max-width: 535px) {
    height: 32rem;
  }

  @media only screen and (max-width: 510px) {
    height: 31rem;
  }

  @media only screen and (max-width: 490px) {
    height: 29.5rem;
  }

  @media only screen and (max-width: 455px) {
    height: 28rem;
  }

  @media only screen and (max-width: 430px) {
    height: 26rem;
  }

  @media only screen and (max-width: 405px) {
    height: 24.5rem;
  }

  @media only screen and (max-width: 375px) {
    height: 22.5rem;
  }

  @media only screen and (max-width: 350px) {
    height: 20.5rem;
  }

  @media only screen and (max-width: 340px) {
    height: 19.5rem;
  }

  @media only screen and (max-width: 330px) {
    height: 18.5rem;
  }

  @media only screen and (max-width: 320px) {
    height: 18rem;
  }
`;

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0.5fr;
  gap: 1rem;
  padding: 2.5rem;
  cursor: pointer;
  margin-bottom: 2rem;

  ${Text} {
    &:last-child {
      text-align: end;
    }
  }

  @media only screen and (max-width: 1112px) {
    grid-template-columns: repeat(2, 1fr) 0.6fr;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 755px) {
    grid-template-columns: repeat(1, 1fr) 0.6fr;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 455px) {
    font-size: 1.4rem;
    padding: 2.5rem 2rem;
  }

  @media only screen and (max-width: 390px) {
    font-size: 1.3rem;
    padding: 2.5rem 1rem;
  }
`;

export const ContainerStyled = styled.li`
  /* text-transform: capitalize; */
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? '60rem' : '7rem')};
  transition: height 0.5s ease;
  margin-bottom: ${({ isOpen }) => (isOpen ? '4rem' : '0')};

  ${ImageStyled} {
    margin: 0 auto;
  }

  @media only screen and (max-width: 790px) {
    height: ${({ isOpen }) => (isOpen ? '58rem' : '7rem')};
  }

  @media only screen and (max-width: 700px) {
    height: ${({ isOpen }) => (isOpen ? '54rem' : '7rem')};
  }

  @media only screen and (max-width: 660px) {
    height: ${({ isOpen }) => (isOpen ? '52rem' : '7rem')};
  }

  @media only screen and (max-width: 620px) {
    height: ${({ isOpen }) => (isOpen ? '48rem' : '7rem')};
  }

  @media only screen and (max-width: 600px) {
    height: ${({ isOpen }) => (isOpen ? '46rem' : '7rem')};
  }

  @media only screen and (max-width: 565px) {
    height: ${({ isOpen }) => (isOpen ? '44rem' : '7rem')};
  }

  @media only screen and (max-width: 535px) {
    height: ${({ isOpen }) => (isOpen ? '42rem' : '7rem')};
  }

  @media only screen and (max-width: 510px) {
    height: ${({ isOpen }) => (isOpen ? '40rem' : '7rem')};
  }

  @media only screen and (max-width: 490px) {
    height: ${({ isOpen }) => (isOpen ? '38.5rem' : '7rem')};
  }

  @media only screen and (max-width: 455px) {
    height: ${({ isOpen }) => (isOpen ? '36.5rem' : '7rem')};
  }

  @media only screen and (max-width: 430px) {
    height: ${({ isOpen }) => (isOpen ? '34rem' : '7rem')};
  }

  @media only screen and (max-width: 405px) {
    height: ${({ isOpen }) => (isOpen ? '32.5rem' : '7rem')};
  }

  @media only screen and (max-width: 375px) {
    height: ${({ isOpen }) => (isOpen ? '30.5rem' : '7rem')};
  }

  @media only screen and (max-width: 350px) {
    height: ${({ isOpen }) => (isOpen ? '29rem' : '7rem')};
  }

  @media only screen and (max-width: 340px) {
    height: ${({ isOpen }) => (isOpen ? '28.8rem' : '7rem')};
  }

  @media only screen and (max-width: 330px) {
    height: ${({ isOpen }) => (isOpen ? '28rem' : '7rem')};
  }

  @media only screen and (max-width: 320px) {
    height: ${({ isOpen }) => (isOpen ? '27rem' : '7rem')};
  }
`;
