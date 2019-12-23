import * as React from 'react';
import styled from '@emotion/styled';

import color from '../../../color/color';

const StyledH1 = styled.h1(({}) => {
  return {
    margin: '16px 0',
    color: color.primaryText,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '32px',
  };
});

export const H1: React.FC = props => {
  return <StyledH1>{props.children}</StyledH1>;
};
