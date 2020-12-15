import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import Image from 'next/image';

import journalEntries from './journalEntries';
import * as THREE from 'three';
import Marker from './Marker';
export default function Globe({ idx, setIdx }) {
  const map = useLoader(THREE.TextureLoader, './world.png');

  // const markerMesh = useRef();
  // useFrame(({ clock }) => {
  //   markerMesh.current.position.x +=
  //     Math.sin(clock.getElapsedTime() / 1.5) / 20;
  //   markerMesh.current.position.z +=
  //     Math.cos(clock.getElapsedTime() / 1.5) / 20;
  // });

  return map ? (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[7, 32, 32]} />
      <meshPhongMaterial
        attach="material"
        color="white"
        opacity={1}
        map={map}
        // wireframe
        roughness={1}
        metalness={0}
      />
    </mesh>
  ) : null;
}
