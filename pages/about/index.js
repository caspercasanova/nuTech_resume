import React from 'react';
import MainContainer from '../../components/ui/MainContainer';
import Bio from '../../components/Bio/Bio';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import MainContent from '../../components/ui/MainContent';
export default function index() {
  return (
    <MainContainer>
      <Navigation />
      <MainContent>
        <Bio />
      </MainContent>
      <Footer />
    </MainContainer>
  );
}
