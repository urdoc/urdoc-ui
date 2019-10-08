import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from '@emotion/styled';
import { withKnobs } from '@storybook/addon-knobs';

import { Input } from './Input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('all', () => (
    <>
      <GrayWrapper>
        <Input />
      </GrayWrapper>
      <WhiteWrapper>
        <Input />
      </WhiteWrapper>
    </>
  ));

const WhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  & > *:not(:first-child) {
    margin-left: 24px;
  }
`;
const GrayWrapper = styled(WhiteWrapper)`
  background-color: #c1c1c1;
`;
