import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner_v4 from '.';

storiesOf('Bytes/Banner_v4', module)
  .addDecorator((Story) => <Story />)
  .add('Banner_v4', () => <Banner_v4 />);
