import { AddCell, Banner, Icon } from '../../bits';

export interface IBanner_v4Props {}

export const Banner_v4 = ({}: IBanner_v4Props) => {
  return (
    <Banner
      v4
      caption={
        <>
          <span>Are you boosted?</span>
          <span>
            Ever win without
            <br />a pocket sage?
          </span>
        </>
      }
      actionTitle="Let’s find out!"
      actionElement={
        <>
          <AddCell
            v4
            placeholder="add your cell # to be notified"
            submitTitle="Add me to Waitlist"
            submitIcon={<Icon.IconCaretRight />}
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
          title: '$1000 prize pool',
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

export default Banner_v4;
