import * as React from 'react';
import styled from '@emotion/styled';

// import openIcon from '../../resources/245.svg';
import icon from './selectIcon';

type Props = React.PropsWithRef<JSX.IntrinsicElements['select']> & {
  fluid?: boolean;
};

const StyledSelect = styled.select<Props>(({ fluid }) => {
  const options: { [key: string]: any } = {};
  if (fluid) {
    options.width = '100%';
  }

  return {
    // font
    color: '#59595b',
    fontSize: '24px',
    fontFamily: 'acumin-pro-semi-condensed, sans-serif',
    fontWeight: 300,
    lineHeight: '32px',

    // sizing
    padding: '6px 48px 10px 22px',
    boxSizing: 'border-box',
    margin: 0,

    // border
    border: 'solid 1px #adabab',
    boxShadow:
      'inset 1px 1px 7px rgba(255, 255, 255, 0.16), inset -1px -1px 7px rgba(0, 0, 0, 0.16)',
    borderRadius: '40px',

    appearance: 'none',

    // background
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'right 0 top 50%, 0 0',
    backgroundSize: '48px auto, 100%',

    backgroundImage: icon,

    ...options,
  };
});

export const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <StyledSelect ref={ref} {...props}>
        {children}
      </StyledSelect>
    );
  }
);
