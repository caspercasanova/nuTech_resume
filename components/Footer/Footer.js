import React from 'react';
import styled from 'styled-components';
import LetsWorkTogether from './LetsWorkTogether';
import CheckOutMyArt from './CheckOutMyArt';

const FooterSection = styled.section`
  width: 100%;
  margin-top: 10px;
`;

const BrainLogo = styled.div`
  width: 60px;
  & img {
    width: 100%;
    height: auto;
  }
`;
/* 
<FooterBody>
        <LetsWorkTogether />
        <CheckOutMyArt />
      </FooterBody> */

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <FooterSection>
      <hr></hr>
      <FooterBody>
        <div>
          <a href="https://github.com/caspercasanova/nuTech_resume">
            <h6>View SourceCode</h6>
          </a>
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
const FooterBody = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
