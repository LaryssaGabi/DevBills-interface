import { ComponentProps, forwardRef } from 'react';

import { Container } from './input-styles';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  variant?: 'black' | 'dark';
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, variant = 'black', error, ...props },
  ref,
) {
  return (
    <Container $variant={variant}>
      {label && <label>{label}</label>}
      <input ref={ref} {...props} />
      {error && <span>{error}</span>}
    </Container>
  );
});