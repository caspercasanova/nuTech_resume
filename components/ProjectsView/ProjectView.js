import React from 'react';
import styled from 'styled-components';

const DocumentSection = styled.section`
  display: flex;
`;

export default function ProjectView({ project }) {
  return (
    <div>
      <header></header>
      <header>
        Name: 'Project X', DOB: '2020-15-10', Objective: '',
      </header>
      <div>Current Status: Unknown</div>
      <DocumentSection>
        <header>Accomplishments:</header>
        <div>
          <ul>
            <li>
              'The Seeding Script is capable of replicating
              parties that will occur for the next week',
            </li>
            <li>
              'Social Media functionality. Add/Remove
              Friends. Block Users. Create Groups and Join
              Parties in a group',
            </li>
            <li>
              'Test Driven Development complete with seeding
              script',
            </li>
          </ul>
        </div>
      </DocumentSection>
      <DocumentSection>
        <header>Purpose</header>
        <div>'To Explore'</div>
      </DocumentSection>

      <DocumentSection>
        <header>Starting Matierials</header>
        <ul>
          <li>NPM template</li>
        </ul>
      </DocumentSection>
      <DocumentSection>
        <header>Technologies Used</header>
        <ul>
          'Node.js', 'MongoDB', 'React.js', 'Jest',
          'Docker', 'Three.Js',
        </ul>
      </DocumentSection>

      <DocumentSection>
        <header>Links</header>
        <div>View Code</div>
        <div>View Live</div>
      </DocumentSection>

      <DocumentSection>
        <div>Summary</div>
        <div>Challenges Faced</div>
        <div>Most Difficult</div>
        <div>Learnings</div>
      </DocumentSection>
      <footer></footer>
    </div>
  );
}
