import React from 'react';
import Project from './Project';

const projectInfos = [
  {
    about: 'Project X',
    date: '2020-15-10',
    bulletPoints: [
      'The Seeding Script is capable of replicating parties that will occur for the next week',
      'Social Media functionality. Add/Remove Friends. Block Users. Create Groups and Join Parties in a group',
      'Test Driven Development complete with seeding script',
    ],
    technologies: ['Node', 'MongoDB', 'React', 'Jest', 'ThreeJs'],
    githubLink: 'github.com',
    schematics: [],
  },
  {
    about: 'Project Y',
    date: '2020-15-10',
    bulletPoints: [
      'Globe Three JS application Capable of rendering points based on coordinates',
      'Modular Codebase, capable of being used in other projects',
      'Still will never give a shit about stupid things that regards peoples',
    ],
    technologies: ['Next', 'Jest', 'ThreeJs'],
    githubLink: 'github.com',
    schematics: [],
  },
  {
    about: 'Project Z',
    date: '2020-15-10',
    bulletPoints: [
      'Application that renders weather data based upon where a user clicks',
      'Somethign Sick',
      'Still will never give a shit about stupid things that regards peoples',
    ],
    technologies: ['Next', 'Jest', 'ThreeJs'],
    githubLink: 'github.com',
    schematics: [],
  },
];

export default function Projects() {
  return (
    <>
      <div>
        <h2>Projects</h2>
        <hr />
        <div>
          {projectInfos.map((project, index) => (
            <Project info={project} key={project + index} />
          ))}
        </div>
      </div>
    </>
  );
}