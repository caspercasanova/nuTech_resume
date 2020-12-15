import React, { useState } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

const AnalogClockContainer = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #111216;
`;

export default function AnalogClocks() {
  return (
    <AnalogClockContainer>
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
    </AnalogClockContainer>
  );
}
