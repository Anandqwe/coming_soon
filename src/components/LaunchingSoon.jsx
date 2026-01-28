import { Fragment } from 'react';
import { useCountdown } from '../hooks';
import { formatNumber } from '../utils';
import { LAUNCH_DATE, LAUNCHING_SOON_CONTENT, COUNTDOWN_LABELS } from '../constants';
import { Ornament } from './ui';
import './LaunchingSoon.css';

/**
 * CountdownItem Component
 * Displays a single countdown unit (days, hours, etc.)
 */
const CountdownItem = ({ value, label }) => (
  <div className="countdown__item">
    <span className="countdown__number">{formatNumber(value)}</span>
    <span className="countdown__label">{label}</span>
  </div>
);

/**
 * LaunchingSoon Component
 * Displays countdown timer and launch announcement
 */
const LaunchingSoon = () => {
  const timeLeft = useCountdown(LAUNCH_DATE);

  const countdownItems = [
    { key: 'days', value: timeLeft.days, label: COUNTDOWN_LABELS.days },
    { key: 'hours', value: timeLeft.hours, label: COUNTDOWN_LABELS.hours },
    { key: 'minutes', value: timeLeft.minutes, label: COUNTDOWN_LABELS.minutes },
    { key: 'seconds', value: timeLeft.seconds, label: COUNTDOWN_LABELS.seconds },
  ];

  return (
    <section className="launching-soon" aria-labelledby="launching-heading">
      <div className="launching-soon__container">
        <div className="launching-soon__badge" role="status" aria-live="polite">
          <span className="launching-soon__icon" aria-hidden="true">
            {LAUNCHING_SOON_CONTENT.badgeIcon}
          </span>
          <span className="launching-soon__text">{LAUNCHING_SOON_CONTENT.badge}</span>
        </div>
        
        <h2 id="launching-heading" className="launching-soon__heading">
          {LAUNCHING_SOON_CONTENT.heading}
        </h2>

        {!timeLeft.isLaunched ? (
          <div className="countdown" role="timer" aria-label="Time until launch">
            {countdownItems.map(({ key, value, label }, index) => (
              <Fragment key={key}>
                {index > 0 && (
                  <span className="countdown__separator" aria-hidden="true">:</span>
                )}
                <CountdownItem value={value} label={label} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="countdown__launched" role="status">
            <span>{LAUNCHING_SOON_CONTENT.launchedText}</span>
          </div>
        )}
        
        <p className="launching-soon__subtext">
          {LAUNCHING_SOON_CONTENT.description}
        </p>

        <Ornament />
      </div>
    </section>
  );
};

export default LaunchingSoon;
