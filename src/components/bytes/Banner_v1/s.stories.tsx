import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner_v1 from '.';

storiesOf('Bytes/Banner_v1', module)
  .addDecorator((Story) => <Story />)
  .add('Banner_v1', () => <Banner_v1 />);
