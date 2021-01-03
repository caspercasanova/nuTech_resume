import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

export default function Globe({ idx, setIdx }) {
  const map = useLoader(THREE.TextureLoader, './world.png');

  return map ? (
    <mesh>
      <sphereBufferGeometry
        attach="geometry"
        args={[7, 32, 32]}
      />
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