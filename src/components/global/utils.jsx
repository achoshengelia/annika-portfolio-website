import { useEffect, useRef } from 'react';
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
  text-transform: ${({ isUppercase, noTransform }) =>
    isUppercase ? 'uppercase' : noTransform ? null : 'capitalize'};
  white-space: ${({ $wrap }) => ($wrap ? null : 'nowrap')};
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
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 700);
  }, [pathname]);

  return null;
};

export const usePrevState = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
