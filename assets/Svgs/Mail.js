import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const SVG = styled(Icon)`
  width: 50px;
  height: 50px;
  fill: rgb(66, 149, 128);
  &:hover {
    fill: #426ba7;
    stroke: #426ba7;
  }
`;

export default function LinkedIn() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 100 125">
      <path
        d="M15 976.362c-1.18 0-2.262.354-3.188.938l35.5 30.031c1.626 1.376 3.816 1.376 5.438 0L88.188 977.3a5.947 5.947 0 00-3.188-.938H15zm-5.656 4.031a5.995 5.995 0 00-.344 1.97v40a5.95 5.95 0 00.969 3.25l25.406-23.157-26.031-22.063zm81.312 0l-25.969 22.032 25.344 23.187a5.95 5.95 0 00.969-3.25v-40c0-.692-.13-1.35-.344-1.969zm-29.031 24.657l-6.313 5.343a8.197 8.197 0 01-10.593 0l-6.281-5.312-25.22 23a5.997 5.997 0 001.782.281h70c.623 0 1.217-.106 1.781-.281l-25.156-23.031z"
        enableBackground="accumulate"
        overflow="visible"
        transform="translate(-10 -942.362)"></path>
    </SVG>
  );
}
