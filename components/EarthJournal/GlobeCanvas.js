import React, { useState, Suspense, useRef } from 'react';
import journalEntries from './journalEntries';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import styles from '../../styles/Home.module.css';
import Marker from './Marker';
import Globe from './Globe';

export default function GlobeCanvas({ idx, setIdx }) {
  return (
    <Canvas
      className={styles.globe_canvas}
      camera={{ position: [0, 0, 25] }}>
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
}
