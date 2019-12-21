import * as React from 'react';
import styled from '@emotion/styled';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  color?: 'blue' | 'white';
};

const sizes = {
  tiny: {
    width: '12px',
    height: '12px',
  },
  small: {
    width: '24px',
    height: '24px',
  },
  medium: {
    width: '48px',
    height: '48px',
  },
  large: {
    width: '72px',
    height: '72px',
  },
};

const colorCodes = {
  blue: '#3db7e3',
  white: '#ffffff',
};

const StyledLoader = styled.div<Props>(({ size, color }) => {
  let sizeProps = sizes.medium;
  if (size) {
    sizeProps = sizes[size];
  }

  let colorCode = colorCodes.blue;
  if (color) {
    colorCode = colorCodes[color];
  }

  return {
    position: 'relative',
    display: 'inline-block',
    border: `2px solid ${colorCode}`,
    borderRadius: '50%',
    borderColor: 'transparent',
    borderTopColor: colorCode,

    animation: 'spin 0.75s infinite linear',

    ...sizeProps,

    '&::before': {
      left: '-2px',
      top: '-2px',
      display: 'inline-block',
      position: 'absolute',
      content: "''",
      width: 'inherit',
      height: 'inherit',
      border: 'inherit',
      borderRadius: 'inherit',
      borderColor: 'transparent',
      borderTopColor: colorCode,
      animation: 'spin 1.5s infinite ease',
    },

    '@keyframes spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  };
});

export const Loader: React.FC<Props> = props => <StyledLoader {...props} />;
