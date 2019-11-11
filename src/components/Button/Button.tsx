import * as React from 'react';
import styled from '@emotion/styled';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  size?: 'small' | 'medium' | 'big';
  fluid?: boolean;
  color?: 'gray' | 'blue' | 'grayishCyan' | 'green' | 'red'; // default is grayishCyan
};

const master_sizes = {
  small: {
    height: '32px',
    fontSize: '16px',
    padding: '1px 24px 3px',
  },
  medium: {
    height: '51px',
    fontSize: '16px',
    padding: '1px 24px 3px',
  },
  big: {
    height: '96px',
    fontSize: '28px',
    padding: '1px 48px 3px',
  },
};

const master_colros = {
  grayishCyan: {
    color: '#ffffff',
    backgroundColor: '#a3bdcd',
  },
  gray: {
    color: '#ffffff',
    backgroundColor: '#adabab',
  },
  blue: {
    color: '#ffffff',
    backgroundColor: '#0071bc',
  },
  green: {
    color: '#ffffff',
    backgroundColor: '#50E68A',
  },
  red: {
    color: '#ffffff',
    backgroundColor: '#E65050',
  },
};

const StyledButton = styled.button<Props>(({ size, fluid, color }) => {
  // サイズ関連のプロパティ(default: medium)
  let sizeDependingProperties: {
    width?: string;
    height: string;
    fontSize: string;
    padding: string;
  } = master_sizes['medium'];
  if (size) {
    sizeDependingProperties = master_sizes[size];
  }

  // fluidの指定がある時はwidth: 100%
  if (fluid) {
    sizeDependingProperties.width = '100%';
  }

  // 背景色、文字色の指定(default: grayishCyan)
  let colors = master_colros['grayishCyan'];
  if (color) {
    colors = master_colros[color];
  }

  return {
    borderRadius: '48px',
    position: 'relative',
    cursor: 'pointer',
    border: 'none',
    boxShadow:
      'inset 1px 1px 7px rgba(255, 255, 255, 0.16), inset -1px -1px 7px rgba(0, 0, 0, 0.16)',

    fontSize: '28px',
    fontFamily: 'acumin-pro-semi-condensed, sans-serif',
    fontWeight: 300,
    lineHeight: '113%',
    letterSpacing: '0',
    '&:disabled': {
      opacity: 0.4,
    },

    ...sizeDependingProperties,
    ...colors,
  };
});

export const Button: React.FC<Props> = props => {
  return <StyledButton {...props} />;
};
