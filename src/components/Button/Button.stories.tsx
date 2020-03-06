import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from '@emotion/styled';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button } from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('all', () => (
    <>
      <GrayWrapper>
        <Button>{text('text', 'Send')}</Button>
      </GrayWrapper>
      <WhiteWrapper>
        <Button size="big" color="white">
          {text('text', 'Send')}
        </Button>
        <Button size="medium">{text('text', 'Send')}</Button>
        <Button size="small">{text('text', 'Send')}</Button>
      </WhiteWrapper>

      <GrayWrapper>
        <Button size="big" loading={true}>
          {text('text', 'Send')}
        </Button>
        <Button size="medium" loading={true}>
          {text('text', 'Send')}
        </Button>
        <Button size="small" loading={true}>
          {text('text', 'Send')}
        </Button>
      </GrayWrapper>
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
