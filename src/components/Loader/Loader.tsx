import * as React from 'react';
import styled from '@emotion/styled';

const StyledLoader = styled('div')({
  position: 'relative',
  display: 'inline-block',
  margin: '0 12.5% 100px',
  width: '50px',
  height: '50px',
  border: '2px solid #3DB7E3',
  borderRadius: '50%',
  borderColor: 'transparent',
  borderTopColor: '#3DB7E3',

  animation: 'spin 0.75s infinite linear',

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
    borderTopColor: '#3DB7E3',
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
});

export const Loader: React.FC = () => <StyledLoader />;
