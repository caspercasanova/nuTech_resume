import React, { useState } from 'react';
import styled from 'styled-components';
import Clock from './Clock';

const AnalogClockContainer = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #111216;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h6 {
    margin: 0;
  }
`;

export default function AnalogClocks() {
  return (
    <AnalogClockContainer>
      <h6>LAX</h6>
      <Clock timezone={'America/Los_Angeles'} />
    </AnalogClockContainer>
  );
}
