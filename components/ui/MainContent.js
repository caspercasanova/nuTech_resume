import React from 'react';
import styled from 'styled-components';
const MainC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  flex: 2;
`;

export default function MainContent({ children }) {
  return <MainC>{children}</MainC>;
}
