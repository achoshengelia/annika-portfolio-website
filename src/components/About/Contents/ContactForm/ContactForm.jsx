import React, { useRef, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Spinner } from '../../../global/icons';
import {
  ArrowWrapperStyled,
  ResponseWrapperStyled,
  ButtonStyled,
  ButtonWrapperStyled,
  ErrorMessageStyled,
  FieldStyled,
  FormStyled,
  SpinnerWrapperStyled
} from './ContactFormStyles';

const initialValues = {
  name: '',
  pronouns: '',
  email: '',
  message: ''
};

const validationSchema = yup.object({
  name: yup.string().required('Please enter this field!'),
  pronouns: yup.string(),
  email: yup
    .string()
    .email('Please enter a valid email address!')
    .required('Please enter this field!'),
  message: yup.string().required('Please enter this field!')
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef(null);
  const resRef = useRef(null);

  const handleSubmit = async () => {
    setIsSubmitted(true);

    try {
      setIsLoading(true);

      await emailjs.sendForm(
        'service_uqkvw9y',
        'template_oyhn187',
        formRef?.current,
        'nFu0aP1pEiDKw53z7'
      );

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        resRef?.current.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center'
        });
      }, 200);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <>
      {isLoading ? (
        <SpinnerWrapperStyled>
          <Spinner />
        </SpinnerWrapperStyled>
      ) : isError ? (
        <ResponseWrapperStyled ref={resRef}>
          Sorry, something went wrong when sending the message.{'     '}
          <button onClick={handleReset}>Click here to try again!</button>
        </ResponseWrapperStyled>
      ) : isSuccess ? (
        <ResponseWrapperStyled ref={resRef}>
          Thanks for reaching out! I will come back to you as soon as possible.{' '}
          <button onClick={handleReset}>Send another message</button>
        </ResponseWrapperStyled>
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={isSubmitted}
        >
          {({ errors, isSubmitting, handleChange }) => (
            <FormStyled noValidate ref={formRef}>
              <FieldStyled
                type="text"
                name="name"
                id="name"
                placeholder="NAME"
              />

              {errors.name ? (
                <ErrorMessageStyled>
                  <ErrorMessage name="name" />
                </ErrorMessageStyled>
              ) : null}

              <FieldStyled
                type="text"
                name="pronouns"
                id="pronouns"
                placeholder="PRONOUNS (Optional)"
              />

              <FieldStyled
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
              />

              {errors.email ? (
                <ErrorMessageStyled>
                  <ErrorMessage name="email" />
                </ErrorMessageStyled>
              ) : null}

              <FieldStyled
                as="textarea"
                name="message"
                id="message"
                placeholder="MESSAGE"
                onChange={handleChange}
              />

              {errors.message ? (
                <ErrorMessageStyled>
                  <ErrorMessage name="message" />
                </ErrorMessageStyled>
              ) : null}

              <ButtonWrapperStyled>
                <ButtonStyled type="submit" disabled={isSubmitting}>
                  SEND <ArrowWrapperStyled>→</ArrowWrapperStyled>
                </ButtonStyled>
              </ButtonWrapperStyled>
            </FormStyled>
          )}
        </Formik>
      )}
    </>
  );
};

export default ContactForm;
