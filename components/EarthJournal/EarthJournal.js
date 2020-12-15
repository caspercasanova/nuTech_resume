import styles from '../../styles/Home.module.css';
import styled from 'styled-components';
import React, { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import Marker from './Marker';
import Globe from './Globe';
import Journal from './Journal';
import journalEntries from './journalEntries';

const EarthJournalContainer = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid #131a22; */
  background-color: #131a22;
`;

const GlobeCanvas = ({ idx, setIdx }) => {
  return (
    <Canvas className={styles.globe_canvas} camera={{ position: [0, 0, 25] }}>
      <OrbitControls maxDistance={18} minDistance={15} />
      <ambientLight intensity={1} />
      <Suspense fallback={<>...Loading</>}>
        <Globe idx={idx} setIdx={setIdx} />
      </Suspense>
      <Suspense fallback={<>...Loading</>}>
        {journalEntries.map((journalEntry, index) => (
          <Marker
            key={index}
            journalEntry={journalEntry}
            earthRadius={7}
            active={index == idx}
            onClick={() => setIdx(index)}
          />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default function EarthJournal() {
  const [idx, setIdx] = useState(0);

  return (
    <>
      <h1>Earth Journal</h1>
      <EarthJournalContainer>
        <GlobeCanvas setIdx={setIdx} idx={idx} />
        <Journal journalEntry={journalEntries[idx]} idx={idx} />
      </EarthJournalContainer>
    </>
  );
}
