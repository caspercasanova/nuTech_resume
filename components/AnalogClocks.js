import React, { useState } from 'react';
import styled from 'styled-components';
import useTime from '../hooks/useTime';

const Svg = styled.svg`
  max-width: 70px;
  display: block;
  margin: 0 auto;
`;

const Frame = styled.circle`
  stroke: cyan;
  fill: transparent;
  stroke-width: 10;
`;
const Minute = styled.g`
  stroke: cyan;
`;
const Hour = styled.g`
  stroke: cyan;
`;

const Clock = ({ timezone }) => {
  const { hours, minutes, seconds } = useTime();

  return (
    <Svg id="clock" viewBox="0 0 300 300">
      <g transform="translate(150, 150)">
        <Frame r="110" />
        <Hour transform={`rotate(${hours * 30 + (minutes / 60) * 30},0,0)`}>
          <line strokeWidth="8" x1="0" y1="15" x2="0" y2="-60" />
        </Hour>

        <Minute transform={`rotate(${minutes * 6},0,0)`}>
          <line strokeWidth="4" x1="0" y1="20" x2="0" y2="-80" />
        </Minute>
      </g>
    </Svg>
  );
};

export default function AnalogClocks() {
  return (
    <div>
      <div>
        <h6>LAX</h6>
        <Clock timezone={'America/Los_Angeles'} />
      </div>
      <div>
        <h6>LON</h6>
        <Clock timezone={'Europe/London'} />
      </div>
      <div>
        <h6>TYO</h6>
        <Clock timezone={'Asia/Tokyo'} />
      </div>
    </div>
  );
}
