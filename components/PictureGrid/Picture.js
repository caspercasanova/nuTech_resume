import React from 'react';
import styled from 'styled-components';
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

export default function Picture({
  src,
  alt,
  title,
  created,
}) {
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
}
