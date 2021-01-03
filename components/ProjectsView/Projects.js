import React from 'react';
import Project from './Project';
import ProjectSvg from '../../assets/Svgs/ProjectSvg';
import styled from 'styled-components';
const projectInfos = [
  {
    about: 'Project X',
    date: '2020-15-10',
    why: '',
    objective: '',
    starterMaterials: '',
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
    starterMaterials: '',
    links: {
      github: 'https://github.com/caspercasanova/project_x',
      liveView: 'https://project-y-oihk8u6f3.vercel.app',
    },
    githubLink:
      'https://github.com/caspercasanova/project_x',
    schematics: [],
    websiteLink: 'https://project-y-oihk8u6f3.vercel.app',
    link: '/project-X',
    mostDifficult: '',
    whenDidIGetStuck: '',
    whatILearned: '',
  },
  {
    about: 'Project Y',
    whatILearned: '',
    date: '2021',
    objective:
      'Build an ecommerce site that business and product revenues to customers in an attempt to provide more transparency and upfrontness. Provide Systematic Sales Events and Document Customer Interations.',
    why:
      'Clothing and Art has always been a passion of mine and if I ever launched a store of my own, I would want to build a site similiar to this.',
    mostDifficult: [
      'Everything. Honestly, initial Design is tough and there are no rules. I essentially took from the best places. I took concepts from Nike as I believe they have the greatest Ecommerce clothing store. They know that pictures are the mainstay for selling and provide TONS of them. A clothing business is more than just a website and more than just the clothes, it ultimately is a representation of a culture and the embodiedment of a community. Nike I believe present community the best.',
      'Steam is probably the most successful privatly held ecommerce platform in the world. Valve knows the gaming sector and is one of the greatest creators in the world. The Steam platform is an amazign piece of software and every online business should take reference of them. With Project-Y I wanted to replicate some kind of sales system but programmatically. I figured the best sales occur during Christmas and Black Friday, so if I could offer 30% off during the weeks leading to that every year, I would be one step ahead of most companies. Effort would be saved every year and as a 1 Man Shop, thats energy I could divert to another place.',
      'The Robinhood.com has an amazingly simplisitc aesthetic. I choose to use Robinhood as a refernce because I its simplicity was something that worked. Think about the number of dollars that people has put into the app. If the app were too complex, people wouldnt spend as much as they do. Like Picaso said, "Great Artists Steal."',
    ],
    starterMaterials:
      'I attempted a similiar project during the summer, so I had some previous html and css for some simple components like inputs. But other than that Everything was built from scratch. ',
    inspiration: ['Nike.com', 'Robinhood.com', 'Steam.com'],
    whenDidIGetStuck: [
      'This was also an experience for me to learn Nextjs. Before this project, I had never touched it and to be honest, there are a bunch of little quirks, but I actually found myself picking it up pretty fast. Once I relized that the file structure was opinionated like Rails, most things became a breeze.',
      'The challenging aspect of this project was the amount of work required in term of styling and backend.',
    ],
    bulletPoints: [
      'SSR Ecommerce web application built with Next.js.',
      'Leverages cloud functions for Stripe payment processing.',
      'Heavy use of SVG charts to display product, brand and user analytics.',
      'MongoDB for storing merchandise, brand and user data.',
      'A seed file can be found here.',
      'Deployed through Vercel and invokes cloud / lambda functions.',
    ],
    technologies: [
      'Next.js',
      'Stripe',
      'Mongodb',
      'Vercel',
      'SASS',
    ],
    links: {
      github: 'https://github.com/caspercasanova/project-y',
      liveView: 'https://project-y-oihk8u6f3.vercel.app',
    },

    githubLink:
      'https://github.com/caspercasanova/project-y',
    schematics: [],
    websiteLink: 'https://project-y-oihk8u6f3.vercel.app',
    link: '/project-Y',
  },
  {
    about: 'Project Z',
    date: '2020-15-10',
    objective: '',
    whatILearned: '',
    why: '',
    mostDifficult: '',
    whenDidIGetStuck: '',
    bulletPoints: [
      'Globe Three JS application Capable Of Rendering Points Based On Coordinates',
      'Deployed Utilizing Next.Js And Vercel',
      'Renders Alien Sighting Data, Capable Of Rendering Any Type of Geospatial Data.',
    ],
    technologies: ['Next.js', 'Jest', 'Three.js'],
    githubLink: 'github.com',
    schematics: [],
    websiteLink: 'https://project-z-nine.vercel.app/',
    link: '/project-Z',
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
    <ProjectsSection id="projects">
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
