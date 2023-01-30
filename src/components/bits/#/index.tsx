import cn from 'classnames';
import { FC } from 'react';
import './style.scss';

export interface IComponentProps {}

export const Component: FC<IComponentProps> = () => (
  <div className={cn('c_component')}></div>
);

export default Component;
