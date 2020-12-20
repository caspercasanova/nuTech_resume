import React from 'react';
import styled from 'styled-components';

const PictureContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: transform 1.1s ease-in;
  &:hover {
    border: 1px solid orange;
  }
  & img {
    width: 514px;
    height: auto;
  }
`;

const Title = styled.h3`
  font-size: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Picture({
  src,
  alt,
  title,
  created,
  flip,
}) {
  return flip ? (
    <PictureContainer>
      <img src={src} alt={alt} />
      <Title>
        <div>{title}</div>
        <div>{created}</div>
      </Title>
    </PictureContainer>
  ) : (
    <PictureContainer>
      <Title>
        <div>{title}</div>
        <div>{created}</div>
      </Title>
      <img src={src} alt={alt} />
    </PictureContainer>
  );
}
