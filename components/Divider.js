import React from 'react';
import styled from 'styled-components';

export default function Divider({ mainText, subtext }) {
  return (
    <div>
      <div>{subtext}</div>
      <h3>{mainText}</h3>
    </div>
  );
}
