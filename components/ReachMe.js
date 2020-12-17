import React from 'react';
import Github from '../assets/Svgs/Github';
import LinkedIn from '../assets/Svgs/LinkedIn';
import Mail from '../assets/Svgs/Mail';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  background-color: #111216;
  align-items: center;
`;

export default function ReachMe() {
  return (
    <div>
      <h4>Reach Out To Me</h4>
      <ButtonContainer>
        <a href="https://www.linkedin.com/in/310-nicholas-lopez/">
          <LinkedIn />
        </a>
        <a href={'https://github.com/caspercasanova'}>
          <Github />
        </a>
        <a href="nhjlopez@gmail.com">
          <Mail />
        </a>
      </ButtonContainer>
    </div>
  );
}
