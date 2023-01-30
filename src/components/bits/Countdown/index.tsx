import cn from 'classnames';
import { FC, useState, useEffect } from 'react';
import './style.scss';

export interface ICountdownProps {
  date: Date;
}

export const Countdown: FC<ICountdownProps> = ({ date }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = date.getTime() - new Date().getTime();
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className={cn('c_countdown')}>
      <div className="c_countdown__item">
        <div className="c_countdown__itemTime">{days}</div>
        <div className="c_countdown__itemTitle">Days</div>
      </div>
      <div className="c_countdown__colon">:</div>
      <div className="c_countdown__item">
        <div className="c_countdown__itemTime">{hours}</div>
        <div className="c_countdown__itemTitle">Hours</div>
      </div>
      <div className="c_countdown__colon">:</div>
      <div className="c_countdown__item">
        <div className="c_countdown__itemTime">{minutes}</div>
        <div className="c_countdown__itemTitle">Minutes</div>
      </div>
      <div className="c_countdown__colon">:</div>
      <div className="c_countdown__item">
        <div className="c_countdown__itemTime">{seconds}</div>
        <div className="c_countdown__itemTitle">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
