import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner_v2 from '.';

storiesOf('Bytes/Banner_v2', module)
  .addDecorator((Story) => <Story />)
  .add('Banner_v2', () => <Banner_v2 />);
