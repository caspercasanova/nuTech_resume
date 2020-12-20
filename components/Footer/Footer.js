import React from 'react';
import styled from 'styled-components';
import LetsWorkTogether from './LetsWorkTogether';
import AnalogClocks from '../AnalogClocks/AnalogClocks';
import CheckOutMyArt from './CheckOutMyArt';

const FooterSection = styled.section`
  width: 100%;
  margin-top: 10px;
`;

const SideFooter = () => {
  return (
    <div>
      <AnalogClocks />
      <div>People Who have visited: 1000: JoshCam</div>
    </div>
  );
};
const FooterBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BrainLogo = styled.div`
  width: 60px;
  & img {
    width: 100%;
    height: auto;
  }
`;

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <FooterSection>
      <FooterBody>
        <LetsWorkTogether />
        <CheckOutMyArt />
      </FooterBody>
      <hr></hr>
      <h6>
        View SourceCode{' '}
        <a href="https://github.com/caspercasanova/nuTech_resume" />
      </h6>
      <h6>Copyright © NSA 1994-{date}</h6>
      <BrainLogo>
        <img
          src={'/images/arts/NSAbrainDagger.png'}
          alt={'brainDagger'}
        />
      </BrainLogo>
    </FooterSection>
  );
}
