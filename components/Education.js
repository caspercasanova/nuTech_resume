import React from 'react';
import styled from 'styled-components';
import HackReactor from '../assets/Svgs/HackReactor';
import Cap from '../assets/Svgs/Cap';
import Column from '../assets/Svgs/Column';
import Image from 'next/image';

const EducationSection = styled.section`
  width: 100%;
`;
const EducationSectionHeader = styled.div`
  display: flex;
  align-items: center;
`;
const EducationSectionBody = styled.div`
  display: flex;
`;

const ImageButton = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111216;
  border: 1px solid rgba(36, 54, 78, 0.5);
  transform: scale(1);
  transition: transform 0.1s ease-in;
  width: 70px;
  height: 70px;
  &:hover {
    transform: scale(1.2);
    border-color: cyan;
    cursor: pointer;
  }
`;

const EducationCard = styled.div`
  max-width: 50ch;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid rgb(66, 149, 128);
  margin: 5px;
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
  }
  & h6 {
    margin: 0;
  }
`;

export default function Education() {
  return (
    <EducationSection>
      <EducationSectionHeader>
        <Column />
        <h3>Education</h3>
      </EducationSectionHeader>
      <hr />
      <EducationSectionBody>
        <EducationCard>
          <EducationCardHeader>
            <ImageButton>
              <a href="https://www.hackreactor.com/">
                <HackReactor />
              </a>
            </ImageButton>
            <CardHeaderTitle>
              <h5>Hack Reactor</h5>
              <h6>
                Computer Software Engineering Immersive
              </h6>
              <h6>Dates attended 2020 – 2020</h6>
            </CardHeaderTitle>
          </EducationCardHeader>
          <EducationCardBody>
            <InfoBox>
              <h6>
                Hack Reactor is the premier immersive
                software developer program focused on
                training full-stack software engineers and
                making experts in Javascript and Node.js.
              </h6>
            </InfoBox>
            <InfoBox>
              <h6>
                Each student works over 70+ hours a week for
                13 weeks through a variety of computer
                science concepts and work on projects of
                interest to continue development and build
                their portfolio.
              </h6>
            </InfoBox>
          </EducationCardBody>
        </EducationCard>
        <EducationCard>
          <EducationCardHeader>
            <ImageButton>
              <a href="https://www.hackreactor.com/">
                <Image
                  src={'/images/GWC.png'}
                  alt="GWC Picture"
                  width={50}
                  height={50}
                />
              </a>
            </ImageButton>
            <CardHeaderTitle>
              <h5>Golden West College</h5>
              <h6>Associates of Science</h6>
              <h6>
                Dates attended 2012 – 2014, 2020 - Present
              </h6>
            </CardHeaderTitle>
          </EducationCardHeader>
          <EducationCardBody>
            <InfoBox>
              <h6>
                Currently pursuing an Associates of Science
                degree from Golden West College am slated to
                recieve my degree it Spring 2021 and will be
                continuing with courses in Mathematics and
                Computer Science afterwards.
              </h6>
            </InfoBox>
            <InfoBox>
              <h6>
                I am a 2012 Undefeated State Champion in
                Water Polo and will never forget the trials
                I faced to be one.
              </h6>
            </InfoBox>
          </EducationCardBody>
        </EducationCard>
      </EducationSectionBody>
    </EducationSection>
  );
}
