import * as React from 'react';
import styled from '@emotion/styled';

type StyledDimmerProps = React.PropsWithoutRef<JSX.IntrinsicElements['div']>;

const DimmerDiv = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Dimmer: React.FC<StyledDimmerProps> = ({ children, ...rest }) => (
  <DimmerDiv {...rest}>{children}</DimmerDiv>
);
