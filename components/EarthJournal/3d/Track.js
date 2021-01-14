import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function Track() {
  const trak = new THREE.Line();

  // const points = useMemo(() => {
  //   const track = new THREE.Line();
  //   track.geometry = new THREE.CircleGeometry(1, 80);
  //   track.geometry.vertices.shift();
  //   track.geometry.vertices.push(
  //     track.geometry.vertices[0]
  //   );
  //   track.geometry.rotateX(Math.PI / 2);
  //   return track;
  // }, []);
  return (
    <line geometry={trak}>
      <lineBasicMaterial attach="material" color="pink" />
    </line>
  );
}
