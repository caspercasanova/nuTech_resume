import React from 'react';
import styled from 'styled-components';
import HackReactor from '../assets/Svgs/HackReactor';
import Cap from '../assets/Svgs/Cap';
const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  & p {
    width: 40ch;
  }
`;
const EducationContainer = styled.div`
  width: 100%;
`;

const InfoBox = styled.div`
  border-radius: 4px;
  background-color: #111216;
  padding: 4px 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageButton = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(36, 54, 78, 0.5);
  padding: 8px 12px;
  transform: scale(1);
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.2);
    border-color: cyan;
    cursor: pointer;
  }
`;

export default function Education() {
  return (
    <EducationContainer>
      <h3>Education</h3>
      <Header>
        <div>
          <div>
            <h5>Hack Reactor</h5>
            <h6>
              --Computer Software Engineering Immersive
            </h6>
          </div>
          <h6>Dates attended 2020 – 2020</h6>
        </div>
        <ImageButton>
          <a href="https://www.hackreactor.com/">
            <HackReactor />
          </a>
        </ImageButton>
      </Header>
      <hr />
      <div>
        <div>
          <div>
            <DescriptionContainer>
              <InfoBox>
                <p>
                  Hack Reactor is the premier immersive
                  software developer program focused on
                  training full-stack software engineers and
                  making experts in Javascript and Node.js.
                </p>
              </InfoBox>
              <InfoBox>
                <p>
                  Each student works over 70+ hours a week
                  for 13 weeks through a variety of computer
                  science concepts and work on projects of
                  interest to continue development and build
                  their portfolio.
                </p>
              </InfoBox>
            </DescriptionContainer>
          </div>
        </div>
      </div>
      <Header>
        <div>
          <div>
            <h5>Golden West College</h5>
            <h6>--Associates of Science</h6>
          </div>
          <h6>
            Dates attended 2012 – 2014, 2020 - Present
          </h6>
        </div>
        <ImageButton>
          <a href="https://www.hackreactor.com/">
            <Cap />
          </a>
        </ImageButton>
      </Header>
      <hr />
      <div>
        <div>
          <div>
            <DescriptionContainer>
              <InfoBox>
                <p>
                  I am currently pursuing a Associates of
                  Science degree from Golden West College
                  and intend to re-educate myself. I am
                  slated to recieve my degree it Spring 2021
                  and will be continuing with courses in
                  Mathematics and Computer Science
                  afterwards.
                </p>
              </InfoBox>
              <InfoBox>
                <p>
                  I did attend Goldenwest College in 2012
                  and compeeted as an athelete. I am a 2012
                  Undefeated State Champion in Water Polo
                  and will never forget the trials I faced
                  to be one.
                </p>
              </InfoBox>
            </DescriptionContainer>
          </div>
        </div>
      </div>
    </EducationContainer>
  );
}
