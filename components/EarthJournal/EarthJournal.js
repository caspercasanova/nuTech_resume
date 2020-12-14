import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import journalEntries from './JournalEntries';

import Marker from './Marker';
import Globe from './Globe';

const EarthJournalContainer = styled.div`
  width: 700px;
  height: 500px;
  border: 1px solid #131a22;
  display: flex;
`;

const GlobeCanvas = () => {
  return (
    <Canvas className={styles.globe_canvas} camera={{ position: [0, 0, 25] }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Suspense fallback={<>...Loading</>}>
        <Globe />
      </Suspense>
      {journalEntries.map((journalEntry, index) => (
        <Marker key={index} journalEntry={journalEntry} earthRadius={7} />
      ))}
    </Canvas>
  );
};

export default function EarthJournal() {
  return (
    <>
      <h1>Earth Journal</h1>
      <EarthJournalContainer>
        <GlobeCanvas />
      </EarthJournalContainer>
    </>
  );
}
