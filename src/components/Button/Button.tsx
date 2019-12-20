import * as React from 'react';
import styled from '@emotion/styled';

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
  color?: 'gray' | 'blue' | 'green' | 'red'; // default is blue
  loading?: boolean;
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
  gray: {
    color: '#ffffff',
    backgroundColor: '#adabab',
  },
  blue: {
    color: '#ffffff',
    backgroundColor: '#3db7e3',
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

const StyledButton = styled.button<Props>(({ size, fluid, color, loading }) => {
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
  let colors = master_colros['blue'];
  if (color) {
    colors = master_colros[color];
  }

  // loader表示時は文字色を背景色と合わせる
  if (loading) {
    colors.color = colors.backgroundColor;
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
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  let loaderSize: 'tiny' | 'small' | 'medium' = 'small';
  if (props.size === 'small') {
    loaderSize = 'tiny';
  } else if (props.size === 'big') {
    loaderSize = 'medium';
  }

  return (
    <Wrapper>
      {props.loading && <Loader color="white" size={loaderSize} />}
      <StyledButton {...props} ref={buttonRef} />
    </Wrapper>
  );
};
