import React from 'react';
import Github from '../../assets/Svgs/Github';
import LinkedIn from '../../assets/Svgs/LinkedIn';
import Mail from '../../assets/Svgs/Mail';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    margin-left: 4px;
    margin-right: 4px;
  }
`;

export default function Socials() {
  return (
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
  );
}
