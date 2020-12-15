import React from 'react';
import styled from 'styled-components';

const ProjectHeader = styled.div`
  display: flex;
  align-items: bottom;
  justify-content: space-between;
`;
const ProjectBody = styled.ul`
  display: block;
`;

const ProjectContainer = styled.div`
  padding: 6px 9px;
  background-color: #111216;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 10px;
`;

export default function Project({ info }) {
  const { about, date, bulletPoints, githubLink, schematics } = info;

  return (
    <ProjectContainer>
      <ProjectHeader>
        <div>
          <h4>Name: {about}</h4>
          <h5>Created: {date}</h5>
        </div>
        <div>
          <a href={`${githubLink}`}>{githubLink}</a>
        </div>
      </ProjectHeader>
      <ProjectBody>
        {bulletPoints.map((bulletPoint, index) => (
          <li key={bulletPoint + index}>{bulletPoint}</li>
        ))}
      </ProjectBody>
    </ProjectContainer>
  );
}
