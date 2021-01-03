import React from 'react';
import MainContainer from '../../components/ui/MainContainer';
import Footer from '../../components/common/Footer';

export default function Projects({ project }) {
  return (
    <MainContainer>
      <ProjectView project={project} />
      <Footer />
    </MainContainer>
  );
}
