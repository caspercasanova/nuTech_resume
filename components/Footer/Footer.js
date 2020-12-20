import React from 'react';
import styled from 'styled-components';
import Socials from '../Socials';

// https://dribbble.com/shots/4381174-Sci-fi-Dark-Landing-Page-Technology

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <>
      <hr></hr>
      <h3>Lets Work Together!</h3>
      <div>Reach Out</div>
      <Socials />
      SourceCode
      <div>
        <div>People Who have visited: 1000: JoshCam</div>
        <p>CopyWrite {date}</p>
      </div>
    </>
  );
}
