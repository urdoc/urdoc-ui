import * as React from 'react';
import styled from '@emotion/styled';

import color from '../../color/color';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  size?: 'small' | 'medium' | 'big';
  fluid?: boolean;
  color?: 'gray' | 'blue' | 'grayishCyan' | 'green' | 'red'; // default is grayishCyan
  width?: number;
};

const master_sizes = {
  small: {
    height: '32px',
    fontSize: '16px',
    padding: '0 24px',
  },
  medium: {
    height: '51px',
    fontSize: '16px',
    padding: '0 24px',
  },
  big: {
    height: '48px',
    fontSize: '20px',
    padding: '0 48px',
  },
};

const master_colors = {
  mainColor: {
    color: '#ffffff',
    backgroundColor: color.brandColor,
  },
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

const StyledButton = styled.button<Props>(({ size, fluid, color, width }) => {
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

  // 背景色、文字色の指定(default: mainColor)
  let colors = master_colors['mainColor'];
  if (color) {
    colors = master_colors[color];
  }

  if (width) {
    sizeDependingProperties.width = `${width}px`;
  }

  return {
    borderRadius: '48px',
    position: 'relative',
    cursor: 'pointer',
    border: 'none',
    boxShadow:
      'inset 1px 1px 7px rgba(255, 255, 255, 0.16), inset -1px -1px 7px rgba(0, 0, 0, 0.16)',

    fontSize: '20px',
    fontFamily: 'acumin-pro-semi-condensed, sans-serif',
    fontWeight: 600,
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
