import React from 'react';
import { device } from './devices';
import styled from 'styled-components';

export default function MainContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
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
