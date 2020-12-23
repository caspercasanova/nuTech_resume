import React, { useState } from 'react';
import styled from 'styled-components';

const EducationCardContainer = styled.div`
  max-width: 50ch;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgb(66, 149, 128);
  margin: 5px;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:hover {
    box-shadow: 0 1px 3px 1px rgb(66, 149, 128);
  }
`;
const EducationCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InfoBox = styled.div`
  border-radius: 4px;
  padding: 4px 4px;
  & h6 {
    padding-top: 10px;
    margin: 0;
  }
`;

const EducationCardHeader = styled.div`
  display: flex;
`;
const CardHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  & h5 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 18px;
  }
  & h6 {
    margin: 0;
  }
`;
const ImageButton = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111216;
  transform: scale(1);
  border: 1px solid rgba(36, 54, 78, 0.5);
  transition: transform 0.1s ease-in;
  width: 70px;
  height: 70px;
  &:hover {
    transform: scale(1.2);
    border-color: #426ba7;
    cursor: pointer;
  }
`;

export default function EducationCard({
  name,
  dates,
  info1,
  info2,
  info3,
  link,
  icon,
}) {
  const [open, setOpen] = useState(false);
  return (
    <EducationCardContainer onClick={() => setOpen(!open)}>
      <EducationCardHeader>
        <ImageButton>
          <a href={link}>{icon}</a>
        </ImageButton>
        <CardHeaderTitle>
          <h5>{name}</h5>
          <h6>{info3}</h6>
          <h6>{dates}</h6>
        </CardHeaderTitle>
      </EducationCardHeader>
      {open && (
        <EducationCardBody>
          <InfoBox>
            <h6>{info1}</h6>
          </InfoBox>
          <InfoBox>
            <h6>{info2}</h6>
          </InfoBox>
        </EducationCardBody>
      )}
    </EducationCardContainer>
  );
}
