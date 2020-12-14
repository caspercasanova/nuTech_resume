import React, { useState } from 'react';
import { Html } from 'drei';
import * as THREE from 'three';
// https://observablehq.com/@asdfex1/satellite-ground-track-visualizer

export default function Marker({ journalEntry, earthRadius }) {
  const { coords, location, date, text } = journalEntry;

  const [latitude, longitude] = coords;

  let latRadius = latitude * (Math.PI / 180);
  let lonRadius = -longitude * (Math.PI / 180);

  let x = Math.cos(latRadius) * Math.cos(lonRadius) * (earthRadius + 0.01);
  let y = Math.sin(latRadius) * (earthRadius + 0.01);
  let z = Math.cos(latRadius) * Math.sin(lonRadius) * (earthRadius + 0.01);
  let rotation = [0.0, -lonRadius, (latRadius - Math.PI) * 0.5];

  const [show, toggleShow] = useState(false);

  return (
    <mesh
      onPointerOut={() => toggleShow(false)}
      onPointerOver={() => toggleShow(true)}
      position={[x, y, z]}
      rotation={rotation}>
      <ringBufferGeometry args={[0.2, 0.4, 1, 1, 0]} />
      <meshBasicMaterial attach="material" side={THREE.DoubleSide} />
      <Html>
        <div className={`content ${!show && 'hidden'}`}>
          <div className="content_header">
            <h6>This Is Something Sick</h6>
          </div>
          <hr />
          <div className="content_body">
            <p>Weather: Rainy</p>
            <p>Weather: Rainy</p>
            <p>Weather: Rainy</p>
            <p>Weather: Rainy</p>
          </div>
        </div>
      </Html>
    </mesh>
  );
}
