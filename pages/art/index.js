import React from 'react';
import styled from 'styled-components';
import PictureGrid from '../../components/PictureGrid/PictureGrid';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

export default function Art() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>
        This is some art of mine. All have been made using
        Photoshop. I like Lines, Gradients, the Vaporwave
        Aesthetic. I want to explore more animated Artforms,
        3D art as well as Screen and Direct-to-Garment
        printing. I have many more Arts, ask me about them.{' '}
      </div>
      <PictureGrid />
    </div>
  );
}
