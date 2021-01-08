import React from 'react';
import MainContainer from '../../components/common/MainContainer';
import ProjectView from '../../components/ProjectView/ProjectView';
export default function Projects({ project }) {
  return (
    <MainContainer>
      <ProjectView project={project} />
    </MainContainer>
  );
}
