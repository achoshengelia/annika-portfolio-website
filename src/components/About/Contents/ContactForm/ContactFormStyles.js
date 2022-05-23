import { Field, Form } from 'formik';
import styled from 'styled-components';
import { LightUp } from '../../../../animations';

export const ErrorMessageSent = styled.div`
  font-size: 2.2rem;
  transition: transform 0.3s ease;

  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 370px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 330px) {
    font-size: 1.45rem;
  }

  & button {
    font-size: 2.2rem;
    background-color: rgba(0, 0, 0, 0);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.other.purple};
      font-size: 2.25rem;
    }

    @media only screen and (max-width: 900px) {
      font-size: 2rem;

      &:hover {
        font-size: 2.05rem;
      }
    }

    @media only screen and (max-width: 450px) {
      font-size: 1.8rem;

      &:hover {
        font-size: 1.85rem;
      }
    }

    @media only screen and (max-width: 370px) {
      font-size: 1.6rem;

      &:hover {
        font-size: 1.62rem;
      }
    }

    @media only screen and (max-width: 330px) {
      font-size: 1.45rem;

      &:hover {
        font-size: 1.42rem;
      }
    }
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
  text-align: left;
  cursor: pointer;
  width: max-content;

  &:hover {
    ${ArrowWrapperStyled} {
      transform: translateX(30%);
    }
  }

  @media only screen and (max-width: 900px) {
    font-size: 4.2rem;
  }

  @media only screen and (max-width: 550px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 370px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 330px) {
    font-size: 2.2rem;
  }
`;

export const ButtonWrapperStyled = styled.div`
  border-top: 1px solid;
  padding-left: 1rem;

  @media only screen and (max-width: 450px) {
    padding-left: 0.4rem;
  }
`;

export const ErrorMessageStyled = styled.div`
  padding-left: 1rem;
  color: ${props => props.theme.colors.other.purple};
  animation: ${LightUp} 0.3s forwards;

  @media only screen and (max-width: 450px) {
    padding-left: 0.4rem;
  }
`;

export const FieldStyled = styled(Field)`
  background: none;
  border: none;
  border-top: 1px solid;
  padding-top: 1.5rem;
  padding-left: 1rem;
  font-size: 3rem;

  &::placeholder {
    font-family: ${props => props.theme.fonts.main};
  }

  @media only screen and (max-width: 900px) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 2.6rem;
    padding-left: 0.4rem;
  }

  @media only screen and (max-width: 370px) {
    font-size: 2.3rem;
  }

  @media only screen and (max-width: 330px) {
    font-size: 2rem;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > textarea {
    font-family: ${props => props.theme.fonts.main};
    min-height: 20rem;
    resize: none;
    outline: none;
  }
`;
