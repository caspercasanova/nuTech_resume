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
        This is some art of mine. I like gradients and have
        been into the vaporwave scene for some years. I have
        many more Arts, ask me about them.{' '}
      </div>
      <PictureGrid />
    </div>
  );
}
