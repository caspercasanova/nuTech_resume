import React from 'react';
import styled from 'styled-components';
const Card = styled.article`
  width: 100%;
  display: flex;
`;

const PictureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 12px;
  &:hover {
    border: 1px solid orange;
  }
  & img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
`;

const Title = styled.h3`
  font-size: 17px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Picture({
  src,
  alt,
  title,
  created,
  flip,
}) {
  return flip ? (
    <Card>
      <PictureContainer>
        <img src={src} alt={alt} />
      </PictureContainer>
      <TitleContainer>
        <Title>
          <span>{title}</span>
          <span>{created}</span>
        </Title>
      </TitleContainer>
    </Card>
  ) : (
    <Card>
      <TitleContainer>
        <Title>
          <span>{title}</span>
          <span>{created}</span>
        </Title>
      </TitleContainer>
      <PictureContainer>
        <img src={src} alt={alt} />
      </PictureContainer>
    </Card>
  );
}
