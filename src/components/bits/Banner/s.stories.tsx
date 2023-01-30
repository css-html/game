import { ComponentStory } from '@storybook/react';
import React from 'react';
import Icon from '../Icon';
import { AddCell, Banner as BannerComponent, Countdown } from '..';

export default {
  title: 'Bits/Banner',
  component: BannerComponent,
};

const Template: ComponentStory<typeof BannerComponent> = (args) => (
  <BannerComponent {...args} />
);

export const Banner = Template.bind({});
Banner.args = {
  v1: true,
  v2: false,
  v3: false,
  v4: false,
  caption: (
    <>
      <span>
        Are you
        <br />
        boosted?
      </span>
      <span>
        Ever win without
        <br />a pocket sage?
      </span>
    </>
  ),
  actionTitle: 'Let’s find out:',
  actionElement: (
    <AddCell
      v1
      placeholder="Add your cell # to know"
      submitTitle="Add me to Waitlist"
      submitIcon={<Icon.IconChevronRight />}
    />
  ),
  // actionElement: <Countdown date={new Date('January 31, 2023 12:00:00')} />,
  list: [
    {
      icon: <Icon.IconClock />,
      title: '2 minute game',
    },
    {
      icon: <Icon.IconValorant />,
      title: '10 question on valorant',
    },
    {
      icon: <Icon.IconDollar />,
      title: '$1000 usd prize pool',
    },
    {
      icon: <Icon.IconCrown />,
      title: 'eternal glory',
    },
  ],
  agreement: (
    <>
      You agree to{' '}
      <a href="#" target="_blank">
        Tos
      </a>{' '}
      and{' '}
      <a href="#" target="_blank">
        PP
      </a>{' '}
      by opting in
      <br />
      You can opt out or stop playing anytime
    </>
  ),
};
