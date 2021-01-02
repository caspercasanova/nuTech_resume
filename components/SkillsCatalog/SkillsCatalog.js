import React, { useState } from 'react';
import SkillTile from './SkillTile';
import links from './links';
import styled from 'styled-components';
import Tools from '../../assets/Svgs/Tools';

const SkillsSection = styled.section`
  width: 100%;
`;
const SkillsSectionHeader = styled.div`
  display: flex;
  align-items: center;
`;

const SkillsSectionBody = styled.div``;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const RealmsContainers = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SkillsButtons = styled.div`
  border: none;
  background: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-variant-caps: small-caps;
  transform: scale(1);
  transition: transform 0.1s ease-in;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background: #111216;
    color: rgb(66, 149, 128);
  }
  & .active {
    border-bottom: 2px solid cyan;
    color: rgb(66, 149, 128);
  }
`;

export default function SkillsCatalog() {
  const [hovered, setHovered] = useState('nothing');

  return (
    <SkillsSection>
      <SkillsSectionHeader>
        <Tools />
        <h3>Skills And Tooling</h3>
      </SkillsSectionHeader>
      <hr />
      <SkillsContainer>
        {links.map((skill, index) => (
          <SkillTile
            skill={skill}
            key={skill + index}
            hovered={hovered}
          />
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
}

const RealmsSelectors = () => {
  return (
    <RealmsContainers>
      <SkillsButtons
        classname={`${
          hovered == 'frontend' ? 'active' : null
        }`}
        onPointerOver={() => setHovered('frontend')}
        onPointerOut={() => setHovered('nothing')}>
        FrontEnd
      </SkillsButtons>
      <SkillsButtons
        classname={`${
          hovered == 'devops' ? 'active' : null
        }`}
        onPointerOver={() => setHovered('devops')}
        onPointerOut={() => setHovered('nothing')}>
        DevOps
      </SkillsButtons>
      <SkillsButtons
        classname={`${
          hovered == 'backend' ? 'active' : null
        }`}
        onPointerOver={() => setHovered('backend')}
        onPointerOut={() => setHovered('nothing')}>
        BackEnd
      </SkillsButtons>
      <SkillsButtons
        classname={`${
          hovered == 'tools' ? 'active' : null
        }`}
        onPointerOver={() => setHovered('tools')}
        onPointerOut={() => setHovered('nothing')}>
        Extra Tools
      </SkillsButtons>
    </RealmsContainers>
  );
};
