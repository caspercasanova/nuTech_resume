import React, { Suspense, useRef, useState } from 'react';
import JournalEntries from '../JournalEntries';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import styles from '../../../styles/Home.module.css';
import Marker from './Marker';
import Globe from './Globe';

const GroupThing = ({ idx, setIdx }) => {
  const groupRef = useRef();
  const [hovered, set] = useState(false);

  useFrame(() => {
    hovered
      ? (groupRef.current.rotation.y += 0)
      : (groupRef.current.rotation.y += 0.002);
  });

  return (
    <group
      ref={groupRef}
      onPointerMove={() => set(true)}
      onPointerOut={() => set(false)}>
      <Suspense fallback={<>...Loading</>}>
        <Globe idx={idx} setIdx={setIdx} />
      </Suspense>
      <Suspense fallback={<>...Loading</>}>
        {JournalEntries.map((journalEntry, index) => (
          <Marker
            key={index}
            journalEntry={journalEntry}
            earthRadius={7}
            active={index == idx}
            onClick={() => setIdx(index)}
          />
        ))}
      </Suspense>
    </group>
  );
};

export default function GlobeCanvas({ idx, setIdx }) {
  return (
    <>
      <Canvas
        className={styles.globe_canvas}
        camera={{
          position: [0, 0, 18],
        }}>
        <ambientLight intensity={1} />
        <GroupThing idx={idx} setIdx={setIdx} />
      </Canvas>
    </>
  );
}
