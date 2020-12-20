import React from 'react';
import useTime from '../../hooks/useTime';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 50px;
  height: 50px;
`;

const Frame = styled.circle`
  stroke: rgb(183, 183, 183);
  fill: transparent;
  stroke-width: 10;
`;
const Minute = styled.g`
  stroke: rgb(183, 183, 183);
`;
const Hour = styled.g`
  stroke: rgb(183, 183, 183);
`;

export default function Clock({ timezone }) {
  const { hours, minutes, seconds } = useTime();

  return (
    <Svg id="clock" viewBox="0 0 300 300">
      <g transform="translate(150, 150)">
        <Frame r="110" />
        <Hour
          transform={`rotate(${
            hours * 30 + (minutes / 60) * 30
          },0,0)`}>
          <line
            strokeWidth="8"
            x1="0"
            y1="15"
            x2="0"
            y2="-60"
          />
        </Hour>

        <Minute transform={`rotate(${minutes * 6},0,0)`}>
          <line
            strokeWidth="4"
            x1="0"
            y1="20"
            x2="0"
            y2="-80"
          />
        </Minute>
      </g>
    </Svg>
  );
}
