import { useState } from 'react';
import useInterval from './useInterval';

const dateToTimeObject = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hours, minutes, seconds };
};

const getTime = () => dateToTimeObject(new Date());

export default function useTime() {
  const [time, setTime] = useState(getTime());

  useInterval(() => setTime(getTime()), 1000);

  return time;
}
