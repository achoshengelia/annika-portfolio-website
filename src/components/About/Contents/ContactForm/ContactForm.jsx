import React, { useRef, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import {
  ArrowWrapperStyled,
  ButtonStyled,
  ButtonWrapperStyled,
  ErrorMessageStyled,
  FieldStyled,
  FormStyled
} from './ContactFormStyles';
import { Spinner } from '../../../global/icons';

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
  const [isSubmitted, SetIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async () => {
    SetIsSubmitted(true);

    try {
      setIsLoading(true);

      await emailjs.sendForm(
        'service_uqkvw9y',
        'template_oyhn187',
        formRef?.current,
        'nFu0aP1pEiDKw53z7gdkjakgak'
      );

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div>
          Sorry, something went wrong when sending the email :(
          <button onClick={() => setIsError(false)}>Try again</button>
        </div>
      ) : isSuccess ? (
        <div>Success</div>
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
