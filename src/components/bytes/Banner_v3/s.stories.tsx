import React from 'react';
import { storiesOf } from '@storybook/react';

import Banner_v3 from '.';

storiesOf('Bytes/Banner_v3', module)
  .addDecorator((Story) => <Story />)
  .add('Banner_v3', () => <Banner_v3 />);
