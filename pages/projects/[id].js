import React from 'react';
import MainContainer from '../../components/common/MainContainer';

export default function Projects({ project }) {
  return (
    <MainContainer>
      <ProjectView project={project} />
    </MainContainer>
  );
}
