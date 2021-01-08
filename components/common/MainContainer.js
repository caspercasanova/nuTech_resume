import React from 'react';
import { device } from '../ui/devices';
import styled from 'styled-components';
import Navigation from './Navigation';
import MainContent from '../ui/MainContent';

export default function MainContainer({ children }) {
  return (
    <Container>
      <MainContent>{children}</MainContent>
      <Navigation />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  width: 100%;
  position: relative;

  @media ${device.mobileS} {
    margin: 0;
  }
  @media ${device.mobileL} {
  }

  @media ${device.laptop} {
    /* max-width: 800px; */
  }

  @media ${device.desktop} {
    margin: 0px auto;
    padding-top: 18px;
    padding-bottom: 24px;
  }

  @media ${device.desktopL} {
    margin: 0px auto;
  }
`;
