import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from '@emotion/styled';
import { withKnobs } from '@storybook/addon-knobs';

import { Select } from './Select';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('all', () => (
    <>
      <GrayWrapper>
        <Select>
          <option>option</option>
          <option>option1</option>
          <option>option2</option>
        </Select>
      </GrayWrapper>
      <WhiteWrapper>
        <Select>
          <option>option</option>
          <option>option1</option>
          <option>option2</option>
        </Select>
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
