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
  width: 100%;
  @media ${device.mobileS} {
    margin: 0;
  }
  @media ${device.mobileL} {
  }

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
    margin: 0px auto;
    padding-top: 18px;
    padding-bottom: 24px;
  }

  & a {
    font-size: 14px;
    transition: transform 0.1s ease-in;
    &:hover {
      cursor: pointer;
      color: #426ba7;
      text-decoration: underline;
    }
  }
`;
