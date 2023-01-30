import { ComponentStory } from '@storybook/react';
import React from 'react';
import Icon from '../Icon';
import { AddCell as AddCellComponent } from '..';

export default {
  title: 'Bits/AddCell',
  component: AddCellComponent,
};

const Template: ComponentStory<typeof AddCellComponent> = (args) => (
  <div style={{ padding: '2rem', backgroundColor: '#f1f1f1' }}>
    <AddCellComponent {...args} />
  </div>
);

export const AddCell = Template.bind({});
AddCell.args = {
  v1: true,
  v2: false,
  v3: false,
  v4: false,
  placeholder: 'Add your cell # to know',
  submitTitle: 'Add me to Waitlist',
  submitIcon: <Icon.IconChevronRight />,
};
