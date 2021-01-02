import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  position: relative;
  & :before {
    content: '';
    position: absolute;
    height: 100%;
    width: 3px;
    background-color: #111216;
  }
`;

export default function Divider({ mainText, subtext }) {
  return (
    <DividerContainer>
      <div>{subtext}</div>
      <h3>{mainText}</h3>
    </DividerContainer>
  );
}
