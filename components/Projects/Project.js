import React from 'react';
import styled from 'styled-components';
import Github from '../../assets/Svgs/Github';

const ProjectContainer = styled.div`
  padding: 6px 9px;

  border-radius: 4px;
  border: 1px solid rgb(66, 149, 128);
  margin: 10px;
  transition: transform 0.1s ease-in;
  &:hover {
    box-shadow: 0 1px 3px 1px rgb(66, 149, 128);
  }
`;

const GithubIcon = styled(Github)`
  width: 35px;
  height: 35px;

  &:hover {
    fill: purple;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  & h5,
  h6 {
    margin: 0;
  }
`;
const BulletPointContainer = styled.ul`
  display: block;
`;

const Technologies = styled.div`
  display: flex;
`;

const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
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
        <h5>{about}</h5>
        <h6>{date}</h6>
        <a href={`${githubLink}`}>
          <GithubIcon />
        </a>
      </ProjectHeader>
      <ProjectBody>
        <BulletPointContainer>
          {bulletPoints.map((bulletPoint, index) => (
            <li key={bulletPoint + index}>{bulletPoint}</li>
          ))}
        </BulletPointContainer>
        <Technologies>
          Technologies
          {technologies.map((tech, index) => (
            <span key={tech + index}>{tech}</span>
          ))}
        </Technologies>
      </ProjectBody>
    </ProjectContainer>
  );
}
