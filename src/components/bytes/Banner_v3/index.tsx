import { AddCell, Banner, Countdown, Icon } from '../../bits';

export interface IBanner_v3Props {}

export const Banner_v3 = ({}: IBanner_v3Props) => {
  return (
    <Banner
      v3
      caption={
        <>
          <span>Are you boosted?</span>
          <span>
            Ever win without
            <br />a pocket sage?
          </span>
        </>
      }
      actionTitle="Let’s find out in:"
      actionElement={
        <>
          <Countdown date={new Date('February 28, 2023 12:00:00')} />
          <AddCell
            v3
            placeholder="Add your cell # to know"
            submitTitle="Add me to Waitlist"
            submitIcon={<Icon.IconChevronRight />}
          />
        </>
      }
      list={[
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
          title: '$1000 prize pool daily',
        },
        {
          icon: <Icon.IconCrown />,
          title: 'eternal glory',
        },
      ]}
      agreement={
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
      }
    />
  );
};

export default Banner_v3;
