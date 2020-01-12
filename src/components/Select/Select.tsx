import * as React from 'react';
import styled from '@emotion/styled';

type Props = React.PropsWithRef<JSX.IntrinsicElements['select']> & {
  fluid?: boolean;
};

const Container = styled.span({
  position: 'relative',
  '&:after': {
    position: 'absolute',
    content: '""',
    display: 'block',
    top: 'calc(calc(100% - 6px) / 2)',
    right: '20px',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #8E99A3',
  },
});

const StyledSelect = styled.select<Props>(({ fluid }) => {
  const options: { [key: string]: any } = {};
  if (fluid) {
    options.width = '100%';
  }

  return {
    position: 'relative',

    // font
    color: '#333E4A',
    fontSize: '16px',
    fontFamily: 'SF Pro Display, sans-serif',
    fontWeight: 400,
    lineHeight: '24px',

    // sizing
    padding: '11px 48px 11px 16px',
    boxSizing: 'border-box',
    margin: 0,

    // border
    border: '1px solid transparent',
    borderRadius: '8px',

    appearance: 'none',

    // background
    backgroundColor: '#F0F3F5',

    ...options,
  };
});

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <Container>
        <StyledSelect ref={ref} {...props}>
          {children}
        </StyledSelect>
      </Container>
    );
  }
);
