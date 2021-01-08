import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <FooterSection>
      <hr></hr>
      <FooterBody>
        <div>
          <h6>
            <a href="https://github.com/caspercasanova/nuTech_resume">
              [VIEW SOURCE CODE]
            </a>
          </h6>
          <h6>Copyright © NSA 1994-{date}</h6>
        </div>
        <BrainLogo>
          <img
            src={'/images/arts/NSAbrainDagger.png'}
            alt={'brainDagger'}
          />
        </BrainLogo>
      </FooterBody>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  width: 100%;
  margin-top: 10px;
  flex-shrink: 0;
`;

const BrainLogo = styled.div`
  width: 60px;
  & img {
    width: 100%;
    height: auto;
  }
`;
const FooterBody = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
