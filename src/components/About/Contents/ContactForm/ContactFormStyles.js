import { Field, Form } from 'formik';
import styled from 'styled-components';
import { LightUp } from '../../../../animations';
import { pxToEm } from '../../../../helpers';

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30rem;
`;

export const ResponseWrapperStyled = styled.div`
  font-size: 2.2rem;
  transition: transform 0.3s ease;

  & button {
    font-size: 2.2rem;
    color: ${props => props.theme.colors.other.black};
    text-decoration: underline;
    cursor: pointer;
    transition: transform 0.1s ease;
    height: max-content;
    background: transparent;

    @media (hover: hover) {
      &:hover {
        color: ${props => props.theme.colors.other.purple};
        transform: scale(1.02);
      }
    }

    @media only screen and (max-width: ${pxToEm(900)}) {
      font-size: 2rem;
    }

    @media only screen and (max-width: ${pxToEm(450)}) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: ${pxToEm(370)}) {
      font-size: 1.6rem;
    }

    @media only screen and (max-width: ${pxToEm(330)}) {
      font-size: 1.45rem;
    }
  }

  @media only screen and (max-width: ${pxToEm(900)}) {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: ${pxToEm(330)}) {
    font-size: 1.45rem;
  }
`;

export const ArrowWrapperStyled = styled.span`
  font-family: ${props => props.theme.fonts.main};
  display: inline-block;
  transition: transform 0.3s ease;
`;

export const ButtonStyled = styled.button`
  background: none;
  font-size: 5rem;
  font-weight: 300;
  text-align: left;
  cursor: pointer;
  width: max-content;
  color: ${props => props.theme.colors.other.black};

  @media (hover: hover) {
    &:hover {
      ${ArrowWrapperStyled} {
        transform: translateX(30%);
      }
    }
  }

  @media only screen and (max-width: ${pxToEm(900)}) {
    font-size: 4.2rem;
  }

  @media only screen and (max-width: ${pxToEm(550)}) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    font-size: 3rem;
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: ${pxToEm(330)}) {
    font-size: 2.2rem;
  }
`;

export const ButtonWrapperStyled = styled.div`
  border-top: 1px solid;
  padding-left: 1rem;
  border-radius: 0;

  @media only screen and (max-width: ${pxToEm(450)}) {
    padding-left: 0.4rem;
  }
`;

export const ErrorMessageStyled = styled.div`
  padding-left: 1rem;
  color: ${props => props.theme.colors.other.purple};
  animation: ${LightUp} 0.3s forwards;

  @media only screen and (max-width: ${pxToEm(450)}) {
    padding-left: 0.4rem;
  }
`;

export const FieldStyled = styled(Field)`
  background: none;
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  padding-top: 1.5rem;
  padding-left: 1rem;
  font-size: 3rem;

  &::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  @media only screen and (max-width: ${pxToEm(900)}) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    font-size: 2.6rem;
    padding-left: 0.4rem;
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: ${pxToEm(330)}) {
    font-size: 2rem;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @supports not (inset: 0) {
    & > * + * {
      margin-top: 1rem;
    }
  }

  & > textarea {
    font-family: ${props => props.theme.fonts.main};
    min-height: 20rem;
    resize: none;
    outline: none;
  }
`;
