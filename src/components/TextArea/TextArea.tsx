import * as React from 'react';
import styled from '@emotion/styled';

type Props = React.PropsWithoutRef<JSX.IntrinsicElements['textarea']>;

const StyledTextArea = styled.textarea<Props>(() => ({
  padding: '20px 18px',
  borderRadius: '40px',
  boxSizing: 'border-box',
  color: '#59595b',
  fontFamily: 'acumin-pro-semi-condensed, sans-serif',
  fontWeight: 300,
  fontSize: '24px',
  border: '1px solid #adabab',
  width: '100%',
  outline: 'none',
  resize: 'none',

  // padding: "16px 14px",
  // borderRadius: "40px",
  // boxSizing: "border-box",
  // fontSize: "16px",
  // border: "1px solid #adabab",
  // width: "100%",
  // outline: "none",
  // resize: "none",
  '&::placeholder': {
    color: '#c3c3c2',
  },
  '&:focus': {
    boxShadow: '0 0 3px 2px rgba(186, 208, 222, 0.92)',
  },
  '&:hover': {
    backgroundColor: 'rgba(186, 208, 222, 0.92)',
  },
}));

export const TextArea: React.FC<Props> = ({ ...rest }) => {
  return <StyledTextArea {...rest} />;
};
