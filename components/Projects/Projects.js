import React from 'react';
import Project from './Project';
import ProjectSvg from '../../assets/Svgs/ProjectSvg';
import styled from 'styled-components';
const projectInfos = [
  {
    about: 'Project X',
    date: '2020-15-10',
    bulletPoints: [
      'The Seeding Script is capable of replicating parties that will occur for the next week',
      'Social Media functionality. Add/Remove Friends. Block Users. Create Groups and Join Parties in a group',
      'Test Driven Development complete with seeding script',
    ],
    technologies: [
      'Node',
      'MongoDB',
      'React',
      'Jest',
      'ThreeJs',
    ],
    githubLink: 'github.com',
    schematics: [],
  },
  {
    about: 'Project Y',
    date: '2020-15-10',
    bulletPoints: [
      'Globe Three JS application Capable of rendering points based on coordinates',
      'Modular Codebase, capable of being used in other projects',
      'Renders awesome alien sighting data',
    ],
    technologies: ['Next', 'Jest', 'ThreeJs'],
    githubLink: 'github.com',
    schematics: [],
  },
  {
    about: 'Project Z',
    date: '2020-15-10',
    bulletPoints: [
      'Flat Earth Simulator',
      'Application that renders weather data based upon where a user clicks',
      'Somethign Sick',
      'Still will never give a shit about stupid things that regards peoples',
    ],
    technologies: ['Next', 'Jest', 'ThreeJs'],
    githubLink: 'github.com',
    schematics: [],
  },
];

const ProjectsSection = styled.section`
  width: 100%;
`;

const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
`;

export default function Projects() {
  return (
    <ProjectsSection>
      <ProjectsHeader>
        <ProjectSvg />
        <h3>Projects</h3>
      </ProjectsHeader>
      <hr />
      <div>
        {projectInfos.map((project, index) => (
          <Project info={project} key={project + index} />
        ))}
      </div>
    </ProjectsSection>
  );
}
