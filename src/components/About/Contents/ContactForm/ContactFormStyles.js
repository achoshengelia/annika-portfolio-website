import { Field, Form } from 'formik';
import styled from 'styled-components';
import { LightUp } from '../../../../animations';

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
`;

export const ButtonWrapperStyled = styled.div`
  border-top: 1px solid;
  padding-left: 1rem;
`;

export const ErrorMessageStyled = styled.div`
  padding-left: 1rem;
  color: ${props => props.theme.colors.other.purple};
  animation: ${LightUp} 0.3s forwards;
`;

export const FieldStyled = styled(Field)`
  background: none;
  border: none;
  border-top: 1px solid;
  padding-top: 1.5rem;
  padding-left: 1rem;
  font-size: 3rem;

  &::placeholder {
    font-family: sans-serif;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > textarea {
    min-height: 20rem;
    resize: none;
    outline: none;
  }
`;
