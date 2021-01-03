import React from 'react';
import styled from 'styled-components';
import PicturesData from './PicturesData';
import Picture from './Picture';
const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PictureNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
{
  /* <nav>
    <button>»</button>
    <button>«</button>
  </nav> */
}

export default function PictureGrid() {
  return (
    <GridContainer>
      {PicturesData.map((pic, index) => (
        <Picture
          src={pic.src}
          key={pic.title}
          alt={pic.title}
          title={pic.title}
          created={pic.created}
          flip={index % 2 == 0}
        />
      ))}
    </GridContainer>
  );
}
