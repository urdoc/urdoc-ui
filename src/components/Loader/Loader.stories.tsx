import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from '@emotion/styled';
import { withKnobs } from '@storybook/addon-knobs';

import { Loader } from './Loader';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .add('all', () => (
    <>
      <WhiteWrapper>
        <Loader size="small" />
        <Loader />
        <Loader size="large" />
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
// const GrayWrapper = styled(WhiteWrapper)`
//   background-color: #c1c1c1;
// `;
