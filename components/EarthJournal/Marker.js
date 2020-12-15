// https://brunodigiuseppe.wordpress.com/2015/02/14/flight-paths-with-threejs/
// https://rstudio-pubs-static.s3.amazonaws.com/181084_00834a0844f841acb4897d0ef4c3a750.html
// https://dev.to/flagrede/making-a-2d-rpg-game-with-react-tree-fiber-4af1
// https://observablehq.com/@asdfex1/satellite-ground-track-visualizer

import React, { useState, useRef } from 'react';
import { Html } from 'drei';
import * as THREE from 'three';
import styled from 'styled-components';
import { useLoader } from 'react-three-fiber';
import Image from 'next/image';

export default function Marker({
  active = false,
  onClick,
  journalEntry,
  earthRadius,
}) {
  const map = useLoader(THREE.TextureLoader, './marker.png');
  const { coords, location, date, text } = journalEntry;

  const [latitude, longitude] = coords;

  let latRadius = latitude * (Math.PI / 180);
  let lonRadius = -longitude * (Math.PI / 180);

  let x = Math.cos(latRadius) * Math.cos(lonRadius) * (earthRadius + 0.5);
  let y = Math.sin(latRadius) * (earthRadius + 0.5);
  let z = Math.cos(latRadius) * Math.sin(lonRadius) * (earthRadius + 0.5);
  let rotation = [0.0, -lonRadius, (latRadius - Math.PI) * 0.5];

  return (
    <sprite onClick={onClick} position={[x, y, z]} rotation={rotation}>
      <spriteMaterial attach="material" map={map} />
      {active && (
        <Html>
          <MarkerContainer>
            <div className="content_header">
              <h4>{location}</h4>
            </div>
            <hr />
            <div className="content_body">
              <p>{date}</p>
              <p>Latitude: {coords[0]} </p>
              <p>Longitude: {coords[1]} </p>
            </div>
          </MarkerContainer>
        </Html>
      )}
    </sprite>
  );
}

const MarkerContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate3d(30%, 0, 0);
  text-align: left;
  font-size: 10px;
  border-radius: 4px;
  padding: 6px 9px;
  border: 2px solid rgb(183, 183, 183);
  width: 200px;
  z-index: 2000;
  background: black;
  & hr {
    width: 100%;
  }
  & .content_header {
    font-size: 10px;
  }
  & p {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
`;
