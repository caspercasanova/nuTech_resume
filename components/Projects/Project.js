import React from 'react';
import styled from 'styled-components';

const ProjectHeader = styled.div`
  display: flex;
  align-items: bottom;
  justify-content: space-between;
`;
const BulletPointContainer = styled.ul`
  display: block;
`;

const ProjectContainer = styled.div`
  padding: 6px 9px;
  background-color: #111216;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 10px;
`;

const Technologies = styled.div`
  display: flex;
`;

export default function Project({ info }) {
  const {
    about,
    date,
    bulletPoints,
    githubLink,
    technologies,
    schematics,
  } = info;

  return (
    <ProjectContainer>
      <ProjectHeader>
        <div>
          <h4>{about}</h4>
          <h5>{date}</h5>
        </div>
        <div>
          <a href={`${githubLink}`}>{githubLink}</a>
        </div>
      </ProjectHeader>
      <Technologies>
        Technologies
        {technologies.map((tech, index) => (
          <span key={tech + index}>{tech}</span>
        ))}
      </Technologies>

      <BulletPointContainer>
        {bulletPoints.map((bulletPoint, index) => (
          <li key={bulletPoint + index}>{bulletPoint}</li>
        ))}
      </BulletPointContainer>
    </ProjectContainer>
  );
}
