import React from 'react';
import styled from 'styled-components';
import PicturesData from './PicturesData';
import Picture from './Picture';
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default function PictureGrid() {
  return (
    <GridContainer>
      {PicturesData.map(pic => (
        <Picture
          src={pic.src}
          key={pic.title}
          alt={pic.title}
          title={pic.title}
          created={pic.created}
        />
      ))}
    </GridContainer>
  );
}
