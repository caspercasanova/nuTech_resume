import React from 'react';
import styled from 'styled-components';
import HackReactor from '../../assets/Svgs/HackReactor';
import Column from '../../assets/Svgs/Column';
import Image from 'next/image';
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <EducationSection id={'education'}>
      <EducationSectionHeader>
        <Column />
        <h3>Education</h3>
      </EducationSectionHeader>
      <hr />
      <EducationSectionBody>
        <EducationCard
          name={'Hack Reactor'}
          info3={'Computer Software Engineering Immersive'}
          dates={'Dates attended 2020 – 2020'}
          link={'https://www.hackreactor.com/'}
          icon={<HackReactor />}
          info1={
            'Hack Reactor is the premier immersive software developer program focused on training full-stack software engineers and making experts in Javascript and Node.js.'
          }
          info2={
            'Each student works over 70+ hours a week for 13 weeks through a variety of computer science concepts and work on projects of interest to continue development and build their portfolio.'
          }
        />

        <EducationCard
          name={'Golden West College'}
          icon={
            <Image
              src={'/images/GWC.png'}
              alt="GWC Picture"
              width={50}
              height={50}
            />
          }
          link={'https://www.hackreactor.com/'}
          info3={'Associates of Science'}
          dates={
            'Dates attended 2012 – 2014, 2020 - Present'
          }
          info2={
            'Slated to recieve an Associates of Science degree from Golden West College Spring 2021 and furthering my education in Mathematics and Computer Science afterwards.'
          }
          info3={
            'Undefeated 2012 Water Polo State Champion.'
          }
        />
      </EducationSectionBody>
    </EducationSection>
  );
}

const EducationSection = styled.section`
  width: 100%;
`;
const EducationSectionBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const EducationSectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;
