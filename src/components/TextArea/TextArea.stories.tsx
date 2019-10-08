import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from '@emotion/styled';
import { withKnobs, text } from '@storybook/addon-knobs';

import { TextArea } from './TextArea';

storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .add('all', () => (
    <>
      <GrayWrapper>
        <TextArea>{text('text', 'Send')}</TextArea>
      </GrayWrapper>
      <WhiteWrapper>
        <TextArea>{text('text', 'Send')}</TextArea>
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
