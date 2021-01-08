import React from 'react';
import styled from 'styled-components';
const MainC = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export default function MainContent({ children }) {
  return <MainC>{children}</MainC>;
}
