import React, { useState } from 'react';
import styled from 'styled-components';
// TODO CONVERT UNDERLINE TO SINE WAVE
// TODO Convert to React-Spring & Styled Component!

const UnderlineContainer = styled.span`
  position: relative;
  margin-left: 2px;
  margin-right: 2px;
  & .Underline {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #fa2e46a4;
    bottom: -20%;
    left: 0;
    transition: 0.5s;
    opacity: 0.9;
    z-index: -1;
  }
  & .active {
    height: 120%;
  }
`;

export default function Underline({ children, link, newtab }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <UnderlineContainer>
      <a
        href={link}
        target={newtab ? '_blank' : ''}
        onPointerOver={() => setIsHovered(true)}
        onFocus={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        onBlur={() => setIsHovered(false)}>
        {children}
      </a>
      <span className={`${isHovered ? 'active' : ''}`} />
    </UnderlineContainer>
  );
}
