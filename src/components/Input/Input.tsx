import * as React from 'react';
import styled from '@emotion/styled';

type Props = React.PropsWithRef<JSX.IntrinsicElements['input']> & {
  size?: 'small' | 'medium';
  fluid?: boolean;
};

const StyledInput = styled.input<Props>(({ fluid }) => {
  return {
    padding: '16px 14px',
    borderRadius: '40px',
    boxSizing: 'border-box',
    fontSize: '16px',
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
  };
});

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ ...rest }, ref) => {
    return <StyledInput ref={ref} {...rest} />;
  }
);
