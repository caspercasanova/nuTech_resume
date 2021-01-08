import React from 'react';
import LetsWorkTogether from '../../components/common/LetsWorkTogether';
import Navigation from '../../components/common/Navigation';
import MainContainer from '../../components/ui/MainContainer';
import Footer from '../../components/common/Footer';
import MainContent from '../../components/ui/MainContent';
export default function Contact() {
  return (
    <MainContainer>
      <Navigation />
      <MainContent>
        <LetsWorkTogether />
      </MainContent>
      <Footer />
    </MainContainer>
  );
}
