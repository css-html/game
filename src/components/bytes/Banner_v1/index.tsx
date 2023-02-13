import { Banner, Countdown, DownloadApp, Icon } from '../../bits';

export interface IBanner_v1Props {}

export const Banner_v1 = ({}: IBanner_v1Props) => {
  return (
    <Banner
      v1
      countdown={<Countdown date={new Date('February 28, 2023 12:00:00')} />}
      caption={
        <>
          <span>
            Ever win without
            <br />a pocket sage?
          </span>
        </>
      }
      actionTitle="Let’s find out:"
      actionElement={<DownloadApp />}
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
          title: '$1000 usd prize pool',
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

export default Banner_v1;
