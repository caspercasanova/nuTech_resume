import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .countdown_digits {
  }
  & .interval {
    margin-right: 3px;
    margin-left: 3px;
  }
`;

const Timer = ({ date = '2021-04-27' }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(date) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <div key={index} className="interval">
        <div>
          <p>
            {timeLeft[interval] <= 9
              ? `0${timeLeft[interval]}`
              : timeLeft[interval]}
          </p>
        </div>
        <div>
          <p>{interval <= 9 ? `0${interval}` : interval}</p>
        </div>
      </div>
    );
  });

  return (
    <CountdownContainer>
      <h3>Time Until Something</h3>
      <CountDownDigits>
        {timerComponents.length && timerComponents}
      </CountDownDigits>
    </CountdownContainer>
  );
};

const CountDownDigits = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default Timer;
