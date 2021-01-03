import React from 'react';
import styled from 'styled-components';
import { device } from './devices';

export default function RowSection({ children }) {
  return <Row>{children}</Row>;
}

const Row = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
