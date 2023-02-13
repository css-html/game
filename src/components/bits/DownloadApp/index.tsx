import cn from 'classnames';
import React, { FC } from 'react';
import Icon from '../Icon';
import './style.scss';

export interface IDownloadAppProps {}

export const DownloadApp: FC<IDownloadAppProps> = () => (
  <div className={cn('c_downloadApp')}>
    <a
      className="c_downloadApp__item"
      href="https://apps.apple.com/us/app/georges-game-valorant-trivia/id1664299978"
      target="_blank"
    >
      <Icon.IconAppleDownload />
    </a>
    <a
      className="c_downloadApp__item"
      href="https://play.google.com/store/apps/details?id=dev.krasov.georgesgame.prod&hl=en_US&gl=US"
      target="_blank"
    >
      <Icon.IconGoogleDownload />
    </a>
  </div>
);

export default DownloadApp;
