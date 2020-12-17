import React from 'react';
import styled from 'styled-components';
import pictures from './pictures';
import GlowCorner from '../GlowCorner';
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default function PictureGrid() {
  return (
    <GridContainer>
      {pictures.map((pic, index) => (
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
const PictureContainer = styled.div`
  width: 100%;
  position: relative;
  & img {
    width: 100%;
    height: auto;
    border: 1px solid orange;
  }
`;
const Pic = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  position: absolute;
  padding: 0;
  margin: 0;
`;

const Picture = ({ src, alt, title, created }) => {
  return (
    <>
      <Pic>
        <PictureContainer>
          <Title>{`${title} - ${created}`}</Title>
          <img src={src} alt={alt} />
        </PictureContainer>
      </Pic>
    </>
  );
};
