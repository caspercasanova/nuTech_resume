import React, { useState } from 'react';
import styled from 'styled-components';
import PictureGrid from '../../components/PictureGrid/PictureGrid';
import Navbar from '../../components/ui/Navbar';
import styles from '../../styles/Home.module.css';
// https://formidable.com/about/
import Link from 'next/link';

const ArtContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 5px;
`;

export default function Art() {
  const [acknowledge, setAcknowled] = useState(false);

  return !acknowledge ? (
    <DontJudgeMe
      acknowledgeFunc={() => setAcknowled(true)}
    />
  ) : (
    <ArtContainer>
      <header>
        <Link href="/">
          <button> Go Back</button>
        </Link>
      </header>
      <PictureGrid />
    </ArtContainer>
  );
}

const AcknowledgeSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const DontJudgeMe = ({ acknowledgeFunc }) => {
  return (
    <AcknowledgeSection>
      <div>
        <p>
          This is just some art of mine. All have been made
          using Photoshop. I like Lines, Gradients, the
          Vaporwave Aesthetic.
        </p>
        <p>
          My approach begins with envisioning the art piece
          printed on a T-Shirt. imbue T-Shirts with art that
          speaks for itself. If, in my mind, the art can
          "Glow" off the T-Shirt then I am onto something.
        </p>
        <p>
          My goal is to somehow give a person a medium to
          express a feeling they are unable to describe
          through words. I can only hope it works.
        </p>
        <p>
          I want to explore more animated Artforms, 3D art
          as well as Screen and Direct-to-Garment printing.
          I have many more Arts, ask me about them.{' '}
        </p>
        <button onClick={acknowledgeFunc}>Continue</button>
      </div>
    </AcknowledgeSection>
  );
};
