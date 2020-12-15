import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: (3, 1fr);
  gap: 3px;
`;

export default function PictureGrid() {
  return <div></div>;
}

const PictureContainer = styled.div``;

const Picture = ({ src, alt }) => {
  return (
    <PictureContainer>
      <img src={src} alt={alt} />
    </PictureContainer>
  );
};
