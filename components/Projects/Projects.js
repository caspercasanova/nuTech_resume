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
      'Node.js',
      'MongoDB',
      'React.js',
      'Jest',
      'Docker',
      'Three.Js',
    ],
    githubLink:
      'https://github.com/caspercasanova/project_x',
    schematics: [],
    link: '/projectX',
  },
  {
    about: 'Project Y',
    date: '2020-15-10',
    bulletPoints: [
      'Next.JS Ecommerce Application',
      'Stripe Integrated and Deployed Using Vercel',
      'Generates and Renders Business Analytics.',
    ],
    technologies: ['Next.js', 'Stripe', 'Mongodb'],
    githubLink:
      'https://github.com/caspercasanova/project-y',
    schematics: [],
    link: '/projectX',
  },
  {
    about: 'Project Z',
    date: '2020-15-10',
    bulletPoints: [
      'Globe Three JS application Capable Of Rendering Points Based On Coordinates',
      'Deployed Utilizing Next.Js And Vercel',
      'Renders Alien Sighting Data, Capable Of Rendering Any Type of Geospatial Data.',
    ],
    technologies: ['Next.js', 'Jest', 'Three.js'],
    githubLink: 'github.com',
    schematics: [],
    link: '/projectZ',
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
