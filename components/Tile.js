import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  height: 100px;
  width: 120px;
  background: rgb(36, 54, 78) none repeat scroll 0% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(10, 10, 10, 0.16) 0px 3px 5px 0px;

  &:hover {
    background-color: rgba(36, 54, 78, 0.5);
    cursor: pointer;
  }
`;

export default function Tile({ icon, children }) {
  return (
    <TileContainer>
      <span>{icon}</span>
      {children}
    </TileContainer>
  );
}
