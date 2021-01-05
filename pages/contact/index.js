import React from 'react';
import MainContainer from '../../components/ui/MainContainer';
import ContactForm from '../../components/common/ContactForm';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer/Footer';

export default function Contact() {
  return (
    <MainContainer>
      <Navigation />
      <ContactForm />
      <Footer />
    </MainContainer>
  );
}
