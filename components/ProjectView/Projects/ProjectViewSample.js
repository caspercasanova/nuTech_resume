import React from 'react';
import styled from 'styled-components';

const ProjectViewSection = styled.section``;

const ProjectHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const DetailSection = styled.section`
  display: flex;
  border-top: 1px solid white;
`;

const SectionName = styled.div`
  display: flex;
  text-align: left;
  flex: 1;
  & h4 {
    margin: 0;
    margin-top: 10px;
  }
`;

const SectionBody = styled.div`
  flex: 2;
`;

export default function ProjectViewSample({
  project = sampleProject,
}) {
  const {
    name,
    date,
    purpose,
    objective,
    accomplishments,
    technologiesUsed,
    links,
    startingMaterials,
    summary,
    hurdles,
  } = project;

  return (
    <div>
      <header></header>
      <ProjectHeader>
        <h3>Name: {name}</h3>
        <h4>Date: {date}</h4>
      </ProjectHeader>
      <h3>Current Status: Unknown</h3>

      <DetailSection>
        <SectionName>
          <h4>Objective:</h4>
        </SectionName>
        <SectionBody>
          <p>{objective}</p>
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Purpose</h4>
        </SectionName>
        <SectionBody>
          <p>{purpose}</p>
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Starting Materials</h4>
        </SectionName>
        <SectionBody>
          <p>
            {startingMaterials.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </p>
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Technologies Used</h4>
        </SectionName>
        <SectionBody>
          <p>
            {technologiesUsed.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </p>
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Links</h4>
        </SectionName>
        <SectionBody>
          <p>
            <a href={links.liveView}>[Live View]</a>
          </p>
          <p>
            <a href={links.github}>[View Code]</a>
          </p>
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Accomplishments</h4>
        </SectionName>
        <SectionBody>
          {accomplishments.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Summary</h4>
        </SectionName>
        <SectionBody>
          <p>{summary}</p>
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Hurdles Faced</h4>
        </SectionName>
        <SectionBody>
          {hurdles.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        </SectionBody>
      </DetailSection>

      <DetailSection>
        <SectionName>
          <h4>Learnings</h4>
        </SectionName>
        <SectionBody>
          <p></p>
        </SectionBody>
      </DetailSection>

      <footer></footer>
    </div>
  );
}

const sampleProject = {
  name: 'Project X',
  date: '2020-15-10',
  purpose:
    'I wanted to further my expertise with back end technologies and diversify myself by exploring the capabilities of a graph database. I also wanted to utilize GraphQL for one project and figured a backend project like Project X would be perfect for it.',
  objective:
    'Find relationships between stock data and / or Seed a database to replicate Time Series Data',
  accomplishments: [
    'The Seeding Script is capable of replicating parties that will occur for the next week',
    'Social Media functionality. Add/Remove Friends. Block Users. Create Groups and Join Parties in a group',
    'Test Driven Development complete with seeding script',
  ],
  technologiesUsed: [
    'Node.js',
    'MongoDB',
    'React.js',
    'Jest',
    'Docker',
    'Three.Js',
  ],
  inspiration: [
    'https://medium.com/applied-data-science/exploring-stocks-in-the-london-stock-exchange-using-graph-networks-in-neo4j-part-1-58a5455084ab',
  ],
  startingMaterials: [
    'GRAND stack Starter app.',
    "O'Reilly Graph Databases Book",
  ],

  links: {
    github: 'https://github.com/caspercasanova/project_x',
    liveView: 'https://project-y-oihk8u6f3.vercel.app',
  },
  githubLink: 'https://github.com/caspercasanova/project_x',
  schematics: [],
  websiteLink: 'https://project-y-oihk8u6f3.vercel.app',
  link: '/project-X',
  hurdles: [
    'Everything in the initial setup was difficult. I think the first steps are always the hardest especially with a new technology. Establishing a proper and maintable code structure for the database was most difficult as I was alone and had little refernce for best practices.',
    'The amount of new Technologies I needed to learn was large. Luckily I know JavaScript and NodeJs, but Neo4j has its own Query Language and before this I had only done tutorials on Apollo and GraphQl servers. Normally too many unfamiliar technologies at once can deter and hinder my learning process, I maintained consistency and bit by bit got closer to a goal.',
    'Generating connected data also became somewhat of a challenge as it required me to change my mental model of what I data points I required.',
  ],

  summary:
    'Graph Databases like Neo4j provide something NonSQL and SQL databases cant. I dont believe there is a silver bullet technology, I believe in more of a shotgun spread approach. I am sure every modern application could find a useful service for a graph database and Neo4j would be the proper choice. The Query Language is not super difficult to understand (Mastering is another thing entirely).',
};
