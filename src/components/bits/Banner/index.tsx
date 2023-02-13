import cn from 'classnames';
import { FC, ReactNode } from 'react';
import './style.scss';

interface ListItem {
  icon?: ReactNode;
  title?: string;
}

export interface IBannerProps {
  v1?: boolean;
  v2?: boolean;
  v3?: boolean;
  v4?: boolean;
  list?: ListItem[];
  caption?: ReactNode;
  agreement?: ReactNode;
  countdown?: ReactNode;
  actionTitle?: string;
  actionElement?: ReactNode;
}

export const Banner: FC<IBannerProps> = ({
  v1,
  v2,
  v3,
  v4,
  list,
  caption,
  agreement,
  countdown,
  actionTitle,
  actionElement,
}) => (
  <div
    className={cn(
      'c_banner',
      v1 && 'c_banner__v1',
      v2 && 'c_banner__v2',
      v3 && 'c_banner__v3',
      v4 && 'c_banner__v4'
    )}
  >
    <div className="c_banner__content">
      {countdown && <div className="c_banner__countdown">{countdown}</div>}
      {caption && <h1 className="c_banner__caption">{caption}</h1>}
      {actionElement && (
        <div className="c_banner__action">
          {actionTitle && (
            <div className="c_banner__actionTitle">{actionTitle}</div>
          )}
          <div className="c_banner__actionElement">{actionElement}</div>
        </div>
      )}
      {!v3 && (
        <>
          {!v4 && (
            <div className="c_banner__list">
              {list?.map((listData, index) => (
                <div className="c_banner__listItem" key={index}>
                  {listData.icon && (
                    <div className="c_banner__listIcon">{listData.icon}</div>
                  )}
                  {listData.title && (
                    <div className="c_banner__listTitle">{listData.title}</div>
                  )}
                </div>
              ))}
            </div>
          )}
          {v4 && (
            <div className="c_banner__prize">
              <div className="c_banner__prizeTitle">Prize pool</div>
              <div className="c_banner__prizeValue">$1000</div>
              <div className="c_banner__prizeText">EVERY DAY</div>
            </div>
          )}
          {agreement && <div className="c_banner__agreement">{agreement}</div>}
        </>
      )}
    </div>
    {v3 && (
      <>
        <div className="c_banner__list">
          {list?.map((listData, index) => (
            <div className="c_banner__listItem" key={index}>
              {listData.icon && (
                <div className="c_banner__listIcon">{listData.icon}</div>
              )}
              {listData.title && (
                <div className="c_banner__listTitle">{listData.title}</div>
              )}
            </div>
          ))}
        </div>
        {agreement && <div className="c_banner__agreement">{agreement}</div>}
      </>
    )}
  </div>
);

export default Banner;
