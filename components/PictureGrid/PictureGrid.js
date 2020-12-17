import React from 'react';
import styled from 'styled-components';
import pictures from './pictures';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: (3, 1fr);
  gap: 3px;
  width: 100%;
`;
const PictureContainer = styled.div`
  width: 100px;
  height: auto;
`;

export default function PictureGrid() {
  return (
    <GridContainer>
      {pictures.map((pic, index) => (
        <Picture
          src={pic.src}
          key={pic.title}
          alt={pic.title}
        />
      ))}
    </GridContainer>
  );
}

const Picture = ({ src, alt }) => {
  return (
    <PictureContainer>
      <img src={`${src}`} alt={alt} />
    </PictureContainer>
  );
};
