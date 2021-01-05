import React from 'react';
import MainContainer from '../../components/ui/MainContainer';
import Bio from '../../components/Bio/Bio';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer/Footer';

export default function index() {
  return (
    <MainContainer>
      <Bio />
    </MainContainer>
  );
}
