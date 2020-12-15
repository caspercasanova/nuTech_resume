import React from 'react';
import SkillTile from './SkillTile';
import links from './links';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export default function SkillsCatalog() {
  return (
    <div>
      <h2>Skills I have</h2>
      <div>
        <p>FrontEnd</p>
        <p>DevOps</p>
        <p>BackEnd</p>
        <p>Extra Tools</p>
      </div>
      <SkillsContainer>
        {links.map((skill, index) => (
          <SkillTile skill={skill} key={skill + index} />
        ))}
      </SkillsContainer>
    </div>
  );
}
