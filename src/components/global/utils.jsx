import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const CenterWrapperStyled = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 145rem;
  height: 100%;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 3rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    padding: 0 1rem;
  }
`;

export const HeadingStyled = styled.span`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.main};
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  font-size: ${({ size, as }) =>
    size
      ? size
      : as === 'h1'
      ? '8rem'
      : as === 'h2'
      ? '7rem'
      : as === 'h3'
      ? '6rem'
      : as === 'h4'
      ? '4rem'
      : as === 'h5'
      ? '2.4rem'
      : as === 'h6'
      ? '1.8rem'
      : null};
  text-transform: ${({ isUppercase }) =>
    isUppercase ? 'uppercase' : 'capitalize'};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({ size, as }) =>
      size
        ? size
        : as === 'h1'
        ? '6.5rem'
        : as === 'h2'
        ? '6rem'
        : as === 'h3'
        ? '5.5rem'
        : as === 'h4'
        ? '3.5rem'
        : as === 'h5'
        ? '2rem'
        : as === 'h6'
        ? '1.6rem'
        : null};
    text-transform: ${({ isUppercase }) =>
      isUppercase ? 'uppercase' : 'capitalize'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${({ size, as }) =>
      size
        ? size
        : as === 'h1'
        ? '5.5rem'
        : as === 'h2'
        ? '4.5rem'
        : as === 'h3'
        ? '6rem'
        : as === 'h4'
        ? '3rem'
        : as === 'h5'
        ? '2rem'
        : as === 'h6'
        ? '1.3rem'
        : null};
    text-transform: ${({ isUppercase }) =>
      isUppercase ? 'uppercase' : 'capitalize'};
  }

  /* @media ${props => props.theme.breakpoints.xs} {
    font-size: ${({ size, as }) =>
    size
      ? size
      : as === 'h1'
      ? '3.5rem'
      : as === 'h2'
      ? '5rem'
      : as === 'h3'
      ? '4rem'
      : as === 'h4'
      ? '3rem'
      : as === 'h5'
      ? '1.6rem'
      : as === 'h6'
      ? '1.1rem'
      : null};
    text-transform: ${({ isUppercase }) =>
    isUppercase ? 'uppercase' : 'capitalize'};
  } */
`;

export const Heading = props => {
  const { as, children } = props;

  return (
    <HeadingStyled as={as} {...props}>
      {children}
    </HeadingStyled>
  );
};

export const TextStyled = styled.span`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.main};
  font-weight: ${({ weight }) => (weight ? weight : 'normal')};
  //font-size: ${({ size }) => (size ? size : '2rem')};
  font-size: ${({ size, as }) =>
    size ? size : as === 'p' ? '1.8rem' : as === 'h5' ? '1.5rem' : null};

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({ size, as }) =>
      size ? size : as === 'p' ? '1.4rem' : as === 'h5' ? '1.35rem' : null};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${({ size, as }) =>
      size ? size : as === 'p' ? '1.4rem' : as === 'h5' ? '1.2rem' : null};
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: ${({ size, as }) =>
      size ? size : as === 'p' ? '1.2rem' : as === 'h5' ? '1.1rem' : null};
  }

  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : null)};
`;

export const Text = props => {
  const { as, children } = props;

  return (
    <TextStyled as={as} {...props}>
      {children}
    </TextStyled>
  );
};

export const LineBreakStyled = styled.hr`
  height: 0.1rem;
  background-color: ${props => props.theme.colors.secondary.main};
  border: none;
`;

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
