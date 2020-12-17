import React from 'react';
import styled from 'styled-components';

const TileContainer = styled.div`
  width: 100%;
  display: ${props =>
    props.hovered == 'nothing' ? 'none' : null};
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 9px;
  background-color: #111216;
  border-radius: 4px;
  border: 1px solid transparent;
  transform: scale(1);
  transition: transform 0.1s ease-in;
  color: rgb(66, 149, 128);
  font-variant-caps: small-caps;
  &:hover {
    border-color: rgba(36, 54, 78, 0.5);
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default function SkillTile({ skill, hovered }) {
  const { href, realm, src, alt } = skill;
  return (
    <TileContainer hovered>
      <a href={`${href}`} target="_blank">
        <img
          src={`${src}`}
          alt={`${alt}`}
          width="18"
          height="auto"
        />
      </a>
      <span>{alt}</span>
    </TileContainer>
  );
}
