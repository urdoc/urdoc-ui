import * as React from 'react';
import styled from '@emotion/styled';

import color from '../../color/color';

type Props = React.PropsWithRef<JSX.IntrinsicElements['input']> & {
  inputSize?: 'small' | 'medium' | 'large';
  innerButtonn?: boolean;
  fluid?: boolean;
  label?: string | React.ReactElement;
  error?: string | React.ReactElement | boolean;
};

const sizes = {
  small: {
    padding: '11px 16px',
  },
  medium: {
    padding: '11px 16px',
  },
  large: {
    padding: '11px 16px',
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
    errorStyles = {
      backgroundColor: '#f1c4dd',
      boxShadow: '0 0 3px 2px rgba(212, 157, 185, 0.92)',
    };
  }

  return {
    padding: '11px 16px',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontSize: '16px',
    lineHeight: '24px',
    border: '1px solid transparent',
    width: fluid ? '100%' : '320px',
    outline: 'none',
    resize: 'none',
    color: color.primaryText,
    letterSpacing: '0.05em',
    backgroundColor: color.inputBg,
    '&::placeholder': {
      color: color.teritiaryText,
    },
    '&:hover': {
      border: '1px solid rgba(186, 208, 222, 0.92)',
    },
    '&:focus': {
      border: '1px solid rgba(186, 208, 222, 0.92)',
      boxShadow: '0 0 3px 2px rgba(186, 208, 222, 0.92)',
    },
    ...sizeStyles,
    ...errorStyles,
  };
});

const Wrapper = styled.div({ display: 'flex', flexDirection: 'column' });

const Label = styled.label({
  color: color.primaryText,
  fontFamily: 'linotype-vectora, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  letterSpacing: '0.05em',
  marginBottom: '8px',
});

const Error = styled.p({
  color: '#e33d64',
  fontFamily: 'linotype-vectora, sans-serif',
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '16px',
  marginTop: '8px',
});

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <Wrapper>
        {label && typeof label === 'string' ? <Label>{label}</Label> : label}
        <StyledInput ref={ref} error={error} {...props} />
        {error && typeof error === 'string' ? <Error>{error}</Error> : error}
      </Wrapper>
    );
  }
);
