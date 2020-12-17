import React from 'react';
import styled from 'styled-components';
import PictureGrid from '../../components/PictureGrid/PictureGrid';
import Navbar from '../../components/Navbar';
export default function Art() {
  return (
    <div>
      <Navbar />
      <div>This is an Art page of mine</div>
      <PictureGrid />
    </div>
  );
}
