import styled from 'styled-components';

export const CenterWrapperStyled = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 145rem;
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
      ? '1.6rem'
      : null};
  text-transform: ${({ isUppercase }) =>
    isUppercase ? 'uppercase' : 'capitalize'};
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
  font-size: ${({ size }) => (size ? size : '2rem')};
  text-transform: ${({ isUppercase }) =>
    isUppercase ? 'uppercase' : 'capitalize'};
`;

export const Text = props => {
  const { as, children } = props;

  return (
    <TextStyled as={as} {...props}>
      {children}
    </TextStyled>
  );
};
