import cn from 'classnames';
import { FC } from 'react';
import './style.scss';

export interface IAppProps {}

const App: FC<IAppProps> = ({ children }) => (
  <div className={cn('c_app')}>{children}</div>
);

export default App;
