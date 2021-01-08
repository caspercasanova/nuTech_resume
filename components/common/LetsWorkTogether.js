import React from 'react';
import ContactForm from './ContactForm';
import Socials from './Socials';
import NetworkSVG from '../../assets/Svgs/NetworkSVG';
import styled from 'styled-components';

export default function LetsWorkTogether() {
  return (
    <div>
      <LetsWorkHeader>
        <NetworkSVG />
        <h4>Lets Work Together!</h4>
      </LetsWorkHeader>
      <p>
        Feel free to shoot me a message, I am always willing
        to chop it up with new faces.
      </p>
      <hr />
      <ContactForm />
      <Socials />
    </div>
  );
}

const LetsWorkHeader = styled.div`
  display: flex;
  align-items: center;
`;
