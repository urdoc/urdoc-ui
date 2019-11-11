import * as React from 'react';
import styled from '@emotion/styled';

type Props = React.PropsWithRef<JSX.IntrinsicElements['input']> & {
  inputSize?: 'small' | 'medium' | 'large';
  innerButtonn?: boolean;
  fluid?: boolean;
  label?: string | Element;
  error?: string | boolean;
};

const sizes = {
  small: {
    padding: '6px 16px 8px',
  },
  medium: {
    padding: '11px 16px 15px',
  },
  large: {
    padding: '14px 16px 18px',
  },
};

const StyledInput = styled.input<Props>(({ fluid, inputSize, error }) => {
  let sizeStyles: {
    padding: string;
  } = sizes['medium'];
  if (inputSize) {
    sizeStyles = sizes[inputSize];
  }

  let errorStyles = {};

  if (error) {
    errorStyles = { backgroundColor: '#f1c4dd' };
  }

  return {
    padding: '16px 14px',
    borderRadius: '40px',
    boxSizing: 'border-box',
    fontSize: '24px',
    border: '1px solid #adabab',
    width: fluid ? '100%' : '320px',
    outline: 'none',
    resize: 'none',
    color: '#59595b',
    '&::placeholder': {
      color: '#c3c3c2',
    },
    '&:focus': {
      boxShadow: '0 0 3px 2px rgba(186, 208, 222, 0.92)',
    },
    ...sizeStyles,
    ...errorStyles,
  };
});

const Wrapper = styled.div({ display: 'flex', flexDirection: 'column' });

const Label = styled.label({
  color: '#59595B',
  fontFamily: 'linotype-vectora, sans-serif',
  fontSize: '16px',
  fontWeight: 300,
  marginBottom: '16px',
});

const Error = styled.p({
  color: '#e33d64',
  fontFamily: 'linotype-vectora, sans-serif',
  fontSize: '16px',
  fontWeight: 300,
  marginTop: '16px',
});

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <Wrapper>
        {label && typeof label === 'string' ? <Label>{label}</Label> : label}
        <StyledInput ref={ref} error={error} {...props} />
        {typeof error === 'string' && <Error>{error}</Error>}
      </Wrapper>
    );
  }
);
