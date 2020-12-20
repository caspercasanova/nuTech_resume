import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const SVG = styled(Icon)`
  width: 50px;
  height: 50px;
  stroke-width: 9;
  fill: none;
`;

export default function HackReactor() {
  return (
    <SVG viewBox="-2 0 180 160">
      <path
        fill="none"
        stroke="#fff"
        d="M82 45A33 36 0 0 0 77.5 117L77.5 136A52 55 0 1 1 77.5 25 L 77.5 6A76 74 0 0 0 82 154.5"
      />
      <path
        fill="none"
        stroke="#2874dc"
        d="M94 117A33 36 0 0 0 98.5 45L98.5 25A52 55 0 1 1 98.5 136L98.5 154.5A76 74 0 0 0 94 6"
      />
    </SVG>
  );
}
