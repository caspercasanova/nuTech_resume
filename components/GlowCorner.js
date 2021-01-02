import React from 'react';
import styled from 'styled-components';

export default function GlowCorner({
  bottom = false,
  top = false,
}) {
  return (
    <CornerContainer>
      {bottom && <BottomCorners />}
      {top && <TopCorners />}
    </CornerContainer>
  );
}

const CornerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Corners = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
  &:before {
    content: '';
    position: absolute;
    border-color: #de1dde;
    border-style: solid;
    width: 15px;
    height: 15px;
    transition: 0.3s;
  }
  &:after {
    content: '';
    border-color: #de1dde;
    border-style: solid;
    position: absolute;
    width: 15px;
    height: 15px;
    transition: 0.3s;
  }
`;
const TopCorners = styled(Corners)`
  top: 0px;
  &:before {
    border-width: 3px 0 0 3px;
    left: 0px;
  }
  &:after {
    border-width: 3px 3px 0 0;
    right: 0px;
  }
`;
const BottomCorners = styled(Corners)`
  bottom: 10px;
  &:before {
    left: 0;
    border-width: 0 0 3px 3px;
  }
  &:after {
    right: 0;
    border-width: 0 3px 3px 0;
  }
`;
