import * as React from 'react';
import styled from '@emotion/styled';

import color from '../../color/color';
import { Loader as _Loader } from '../Loader';

const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Loader = styled(_Loader)({
  position: 'absolute',
  zIndex: 10,
});

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['button']> & {
  size?: 'small' | 'medium' | 'big';
  fluid?: boolean;
  color?: 'gray' | 'blue' | 'green' | 'red' | 'white'; // default is blue
  loading?: boolean;
};

const master_sizes = {
  small: {
    height: '32px',
    fontSize: '16px',
    padding: '0 24px',
  },
  medium: {
    height: '36px',
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
  gray: {
    color: '#ffffff',
    backgroundColor: '#adabab',
    border: 'none',
  },
  blue: {
    color: '#ffffff',
    backgroundColor: color.brandColor,
    border: 'none',
  },
  green: {
    color: '#ffffff',
    backgroundColor: '#50E68A',
    border: 'none',
  },
  red: {
    color: '#ffffff',
    backgroundColor: '#E65050',
    border: 'none',
  },
  white: {
    color: '#8e99a3',
    backgroundColor: '#ffffff',
    border: 'solid 1px #8e99a3',
  },
};

const StyledButton = styled.button<Props>(
  ({ size, fluid, color, loading, disabled }) => {
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

    // 背景色、文字色の指定(default: blue)
    let colors = master_colors['blue'];
    if (color) {
      colors = master_colors[color];
    }

    return {
      borderRadius: '48px',
      position: 'relative',
      cursor: loading || disabled ? 'default' : 'pointer',
      fontSize: '20px',
      fontFamily: 'acumin-pro-semi-condensed, sans-serif',
      fontWeight: 600,
      lineHeight: '113%',
      letterSpacing: '0',
      '&:disabled': {
        opacity: 0.4,
      },

      opacity: loading || disabled ? 0.45 : 1,
      ...sizeDependingProperties,
      ...colors,
    };
  }
);

export const Button: React.FC<Props> = props => {
  let loaderSize: 'tiny' | 'small' | 'medium' = 'small';
  if (props.size === 'small') {
    loaderSize = 'tiny';
  } else if (props.size === 'big') {
    loaderSize = 'small';
  }

  return (
    <Wrapper>
      {props.loading && <Loader color="white" size={loaderSize} />}
      <StyledButton {...props} />
    </Wrapper>
  );
};
