import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const SVG = styled(Icon)`
  width: 50px;
  height: 50px;
`;

export default function Cap() {
  return (
    <SVG x="0" y="0" viewBox="0 0 100 73.682">
      <path
        fill="rgb(66, 149, 128)"
        d="M50 0L0 26.315 50 52.63l28.946-14.637v19.899c0 10.527 10.527 10.527 10.527 10.527v-5.263s-5.263-.301-5.263-5.265V35.03L100 26.315 50 0z"></path>
      <path
        fill="rgb(66, 149, 128)"
        d="M26.315 47.367v10.526c0 2.615 1.711 6.118 5.263 7.895L50 73.682l15.789-7.895c3.553-1.776 8.143-5.292 7.895-7.895V47.367L50 58.879 26.315 47.367z"></path>
    </SVG>
  );
}
