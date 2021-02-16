import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 20px 40px;
`;

export default function ProjectView() {
  const [page, setPage] = useState('Project X');

  return (
    <ProjectContainer>
      <ProjectCard
        link={'https://github.com/caspercasanova/project-y'}
        name={'Project Y'}
        date={'2021'}
      />
      <ProjectCard
        link={'https://github.com/caspercasanova/slave1'}
        name={'Slave 1'}
        date={'2021'}
      />
      <ProjectCard
        link={'https://github.com/caspercasanova/exhibit-z'}
        name={'Exhbit Z'}
        date={'2021'}
      />
      <ProjectCard
        link={'https://github.com/caspercasanova/NewSense'}
        name={'New Sense [ Abandoned ]'}
        date={'2021'}
      />
      <ProjectCard
        link={
          'https://codesandbox.io/s/vigorous-spence-26ch1'
        }
        name={'Hashing Algo'}
        date={'2021'}
      />
      <ProjectCard
        name={'Nyke [ Abandoned ]'}
        date={'2020'}
        link={
          'https://github.com/Team-NightHawk/FEC-Service-Nick'
        }
      />
      <ProjectCard
        link={
          'https://github.com/Team-NightHawk/SDC-Component-Nick'
        }
        name={'System Design [ Abandoned ]'}
        date={'2020'}
      />
    </ProjectContainer>
  );
}

const ProjectCardContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 10px;
  width: 300px;
  height: auto;
  cursor: pointer;
  margin: 20px;

  &:hover {
    border-color: #fff;
  }
`;

const ProjectCardHeader = styled.div`
  font-size: 20px;
`;

const ProjectCardBody = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: auto;
  }
`;

const ProjectCard = ({ link, name, date }) => {
  return (
    <a target="_blank" href={link}>
      <ProjectCardContainer>
        <ProjectCardHeader>
          <h4>{name}</h4>
          <h4>{date}</h4>
        </ProjectCardHeader>
        <ProjectCardBody>
          <img src={'/images/arts/la.png'} />
        </ProjectCardBody>
      </ProjectCardContainer>
    </a>
  );
};
